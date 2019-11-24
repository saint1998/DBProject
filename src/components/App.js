import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEmployees, fetchDormitories } from "../actions";
import Navbar from "./Navbar";
import TableContent from "./TableContent";
import history from "../history";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar onClickNavbar={this.onClickNavbar} />
          <Switch>
            <Route path="/employees">
              <TableContent data={this.props.employees} header="Employee" />
            </Route>
            <Route path="/dormitories">
              <TableContent data={this.props.dormitories} header="Dormitory" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.props.fetchEmployees();
    this.props.fetchDormitories();
  }

  onClickNavbar = button => {
    switch (button) {
      case "employee":
        return history.push("/employees");
      case "dormitory":
        return history.push("/dormitories");
    }
  };
}

const mapStateToProps = state => {
  return { employees: state.employees, dormitories: state.dormitories };
};

export default connect(mapStateToProps, { fetchEmployees, fetchDormitories })(
  App
);
