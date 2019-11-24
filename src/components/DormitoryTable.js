import React, { Component } from "react";
import Popup from "reactjs-popup";

class DormitoryTable extends Component {
  state = {};
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
                  <a>{obj.Name}</a>
                  <Popup modal trigger={<button>Edit</button>}>
                    <div></div>
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
}

export default DormitoryTable;
