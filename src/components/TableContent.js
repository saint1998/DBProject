import React, { Component } from "react";

import "./TableContent.css";
import EmployeeTable from "./EmployeeTable";
import DormitoryTable from "./DormitoryTable";

class TableContent extends Component {
  state = {};
  render() {
    return <div> {this.renderTable(this.props.header, this.props.data)}</div>;
  }

  renderTable = (header, data) => {
    header = header.toLowerCase();
    if (header == "employee") {
      return <EmployeeTable header={header} data={data} />;
    } else if (header == "dormitory") {
      return <DormitoryTable header={header} data={data} />;
    }
  };
}

export default TableContent;
