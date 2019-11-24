import React, { Component } from "react";
import Popup from "reactjs-popup";

import api from "../apis";
import "./DormitoryTable.css";

class DormitoryTable extends Component {
  state = { employeeInDorm: [] };
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
                  <a>{obj.Name}</a>
                  <Popup
                    modal
                    trigger={
                      <button onClick={this.onClickMoreInfo}>More info</button>
                    }
                  >
                    {() => {
                      this.onClickMoreInfo(obj.Id);
                      return (
                        <div>
                          <a>{obj.Name}</a>
                          <br />
                          <a>Description: {obj.Description}</a>
                          <div className="Row">
                            <a>Number of Room: {obj.Number_of_room}</a>{" "}
                            <a>Number of Student: {obj.Number_of_student}</a>
                          </div>
                          <div className="Row">
                            <a>Room rate: {obj.Room_rate}</a>
                          </div>
                          Employee
                          <div className="EmployeeTable">
                            {this.state.employeeInDorm.map(employee => (
                              <div className="data">
                                <a>
                                  {employee.First_name} {employee.Last_name}
                                </a>
                                <br />
                                <a>{employee.Position}</a>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  </Popup>
                </div>
              );
            })}
          </div>
        </div>
        <Popup
          modal
          trigger={<button className="CreateButton">Create</button>}
        ></Popup>
      </div>
    );
  }

  onClickMoreInfo = dormitory_id => {
    api.get(`/dormitories/${dormitory_id}/employees`).then(response => {
      this.setState({ employeeInDorm: response.data });
    });
  };
}

export default DormitoryTable;
