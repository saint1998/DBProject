import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
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
              <i class="fas fa-id-card"></i>Profile
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-graduation-cap"></i>
              Student
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-cogs"></i>Employee
            </a>
          </li>
          <li>
            <a>
              <i class="far fa-futbol"></i>Activity
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-building"></i>Dormitory
            </a>
          </li>
          <li>
            <a>
              <i class="far fa-newspaper"></i>Request
            </a>
          </li>
          <li>
            <a>Log out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;