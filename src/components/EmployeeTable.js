import React, { Component } from "react";
import Popup from "reactjs-popup";
import { connect } from "react-redux";

import {
  updateEmployee,
  fetchEmployees,
  deleteEmployee,
  createEmployee
} from "../actions";
import "./EmployeeTable.css";

class EmployeeTable extends Component {
  state = {
    positions: ["Officer", "Repair Man"],
    dormitories: ["Chuan Chom", "Jum Pee", "Jum Paa", "Put Tarn", "Put Sorn"]
  };
  render() {
    return (
      <div className="TableContent">
        <div className="Table">
          <div className="Header">
            {this.props.header.substring(0, 1).toUpperCase() +
              this.props.header.substring(1)}
          </div>
          <div className="Content">
            {this.props.data.map(obj => {
              return (
                <div className="data" key={obj.Ssn}>
                  <a>{`${obj.First_name} ${obj.Last_name}`}</a>
                  <Popup modal trigger={<button>Edit</button>}>
                    {close => (
                      <div className="Popup">
                        <div className="HeaderEdit">EDIT</div>
                        <div className="Row1">
                          <span>
                            <img
                              src="http://www.henhunt.co.uk/wp-content/uploads/2014/10/Person-Logo-1.png"
                              height="50"
                            />
                          </span>
                          <div className="Name">
                            <a>{obj.First_name}</a>
                            <a>{obj.Last_name}</a>
                          </div>
                        </div>
                        <div className="Row2">
                          <div>
                            <a>Position</a>
                            <select id="Position">
                              {this.renderDefault(
                                this.state.positions,
                                obj.Position
                              )}
                              )}
                            </select>
                          </div>
                          <div>
                            <a>Dormitory</a>
                            <select id="Dormitory">
                              {this.renderDefault(
                                this.state.dormitories,
                                this.state.dormitories[obj.Dormitory_id - 1]
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="Row3">
                          <button
                            onClick={() => {
                              this.onClickDelete(
                                obj.Ssn,
                                `${obj.First_name} ${obj.Last_name}`
                              );
                              close();
                            }}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              this.onClickSave(obj.Ssn);
                              close();
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              );
            })}
          </div>
        </div>
        <Popup
          modal
          trigger={
            <button className="CreateButton" onClick={this.onClickCreate}>
              Create
            </button>
          }
        >
          {close => (
            <div>
              <a>CREATE</a>
              <div className="Row1">
                First Name: <input type="text" id="FirstName" />
                Last Name: <input type="text" id="LastName" />
              </div>
              <div className="Row1">
                SSN:{" "}
                <input type="text" placeholder="must be 13 digit" id="SSN" />
                Phone Number:{" "}
                <input
                  type="text"
                  placeholder="must be 10 digit"
                  id="PhoneNumber"
                />
              </div>
              <div className="Row1">
                Birth Date:{" "}
                <input type="text" placeholder="YYYY-MM-DD" id="BirthDate" />
                Start Date:{" "}
                <input type="text" placeholder="YYYY-MM-DD" id="StartDate" />
              </div>
              <div className="Row1">
                Address: <input type="text" id="Address" />
              </div>
              <div className="Row1">
                Position:{" "}
                <select id="Position">
                  {this.renderDefault(this.state.positions, "")}
                </select>
                Dormitory:{" "}
                <select id="Dormitory">
                  {this.renderDefault(this.state.dormitories, "")}
                </select>
              </div>
              <button
                onClick={() => {
                  this.onClickCreate(close);
                }}
              >
                Create
              </button>
              <button onClick={close}>Cancel</button>
            </div>
          )}
        </Popup>
      </div>
    );
  }

  renderDefault = (options, defaultValue) => {
    return options.map(option => {
      if (option.toLowerCase() == defaultValue.toLowerCase()) {
        return (
          <option value={option} selected={true}>
            {option}
          </option>
        );
      } else {
        return <option value={option}>{option}</option>;
      }
    });
  };

  onClickSave = id => {
    let positionSelect = document.getElementById("Position");
    let dormitorySelect = document.getElementById("Dormitory");
    this.props.updateEmployee(
      id,
      positionSelect.options[positionSelect.selectedIndex].value,
      this.state.dormitories.indexOf(
        dormitorySelect.options[dormitorySelect.selectedIndex].value
      ) + 1
    );
    this.props.fetchEmployees();
  };

  onClickDelete = (id, name) => {
    if (window.confirm(`Are You Sure to Delete ${name} from EMPLOYEE`)) {
      this.props.deleteEmployee(id);
      this.props.fetchEmployees();
      window.location.reload();
    } else {
      return;
    }
  };

  onClickCreate = close => {
    let First_name = document.getElementById("FirstName").value;
    let Last_name = document.getElementById("LastName").value;
    let Ssn = document.getElementById("SSN").value;
    let Phone_number = document.getElementById("PhoneNumber").value;
    let Birthdate = document.getElementById("BirthDate").value;
    let Start_date = document.getElementById("StartDate").value;
    let Address = document.getElementById("Address").value;
    let Position = document.getElementById("Position").value;
    let Dormitory_id =
      this.state.dormitories.indexOf(
        document.getElementById("Dormitory").value
      ) + 1;
    if (!First_name) {
      return window.alert("Please Enter First Name");
    }
    if (/[ \d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(First_name)) {
      return window.alert(
        "First Name cannot contain number or special character"
      );
    }
    if (!Last_name) {
      return window.alert("Please Enter Last Name");
    }
    if (/[ \d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(Last_name)) {
      return window.alert(
        "Last Name cannot contain number or special character"
      );
    }
    if (!/^[0-9]{13}$/.test(Ssn)) {
      return window.alert("Ssn must be 13 digits");
    }
    if (!/^[0-9]{10}$/.test(Phone_number)) {
      return window.alert("Phone Number must be 10 digits");
    }
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(Birthdate)) {
      return window.alert('Birth Date must be in form "YYYY/MM/DD"');
    }
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(Start_date)) {
      return window.alert('Start Date must be in form "YYYY/MM/DD"');
    }
    if (!Address) {
      return window.alert("Please Enter Address");
    }
    let data = {
      First_name,
      Last_name,
      Ssn,
      Phone_number,
      Birthdate,
      Start_date,
      Address,
      Position,
      Dormitory_id
    };
    this.props.createEmployee(data);
    close();
    window.location.reload();
  };
}

export default connect(null, {
  deleteEmployee,
  updateEmployee,
  createEmployee,
  fetchEmployees
})(EmployeeTable);
