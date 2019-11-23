import React, { Component } from "react";
import Popup from "reactjs-popup";

import "./TableContent.css";

class TableContent extends Component {
  state = {};
  render() {
    return (
      <div className="TableContent">
        <div className="Table">
          <div className="Header">{this.props.header}</div>
          <div className="Content">
            {this.props.data.map(obj => {
              return (
                <div className="data" key={obj.id}>
                  <a>{obj.name}</a>
                  <Popup modal trigger={<button>Edit</button>}>
                    {this.renderInfo(this.props.header.toLowerCase(), obj)}
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

  renderInfo = (type, obj) => {
    if (type == "employee") {
      return (
        <div>
          {Object.keys(obj).map(key => {
            return (
              <div>
                <a>{key}</a>
                <a>{obj[key]}</a>
              </div>
            );
          })}
        </div>
      );
    } else if (type == "dormitory") {
      return (
        <div>
          {Object.keys(obj).map(key => {
            return (
              <div>
                <a>{key}</a>
                <a>{obj[key]}</a>
              </div>
            );
          })}
        </div>
      );
    }
  };
}

export default TableContent;
