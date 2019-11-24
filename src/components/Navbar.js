import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <div className="TopBar">
          <div className="SearchBar">
            <input type="text" placeholder="Search.." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <ul className="ButtonBar">
          <span>
            <img
              src="http://www.henhunt.co.uk/wp-content/uploads/2014/10/Person-Logo-1.png"
              height="50"
            />
            <a>Nathabordine</a>
          </span>
          <li>
            <a>
              <i className="fas fa-id-card"></i>Profile
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-graduation-cap"></i>
              Student
            </a>
          </li>
          <li>
            <a onClick={() => this.onClickButton("employee")}>
              <i className="fas fa-cogs"></i>Employee
            </a>
          </li>
          <li>
            <a>
              <i className="far fa-futbol"></i>Activity
            </a>
          </li>
          <li>
            <a onClick={() => this.onClickButton("dormitory")}>
              <i className="fas fa-building"></i>Dormitory
            </a>
          </li>
          <li>
            <a>
              <i className="far fa-newspaper"></i>Request
            </a>
          </li>
          <li>
            <a>Log out</a>
          </li>
        </ul>
      </div>
    );
  }

  onClickButton = button => {
    this.props.onClickNavbar(button);
  };
}

export default Navbar;
