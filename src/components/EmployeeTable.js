import React, { Component } from "react";
import Popup from "reactjs-popup";

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
                <div className="data" key={obj.Id}>
                  <a>{obj.First_name}</a>
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
                            <select className="Position">
                              {this.renderDefault(
                                this.state.positions,
                                obj.Position
                              )}
                              )}
                            </select>
                          </div>
                          <div>
                            <a>Dormitory</a>
                            <select className="Dormitory">
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
                              this.onClickDelete();
                              close();
                            }}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              this.onClickSave();
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
        ></Popup>
      </div>
    );
  }

  renderDefault = (options, defaultValue) => {
    return options.map(option => {
      if (option.toLowerCase() == defaultValue.toLowerCase()) {
        return (
          <option value={option} selected>
            {option}
          </option>
        );
      } else {
        return <option value={option}>{option}</option>;
      }
    });
  };

  onClickSave = () => {
    console.log("Closed");
  };

  onClickDelete = () => {};

  onClickCreate = () => {};
}

export default EmployeeTable;
