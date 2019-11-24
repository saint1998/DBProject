import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEmployees, fetchDormitories } from "../actions";
import Navbar from "./Navbar";
import TableContent from "./TableContent";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/employees">
              <TableContent data={this.props.employees} header="Employee" />
            </Route>
            <Route path="/dormitories">
              <TableContent data={this.props.dormitories} header="Dormitory" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    this.props.fetchEmployees();
    this.props.fetchDormitories();
  }
}

const mapStateToProps = state => {
  return { employees: state.employees, dormitories: state.dormitories };
};

export default connect(mapStateToProps, { fetchEmployees, fetchDormitories })(
  App
);
