import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <img
          src="http://www.henhunt.co.uk/wp-content/uploads/2014/10/Person-Logo-1.png"
          height="100"
        ></img>
        <ul className="ButtonBar">
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Student</a>
          </li>
          <li className="Activity">
            <a>Activity</a>
          </li>
          <li>
            <a>Dormitory</a>
          </li>
          <li className="Request">
            <a>Request</a>
          </li>
          <li className="Logout">
            <a>Log out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
