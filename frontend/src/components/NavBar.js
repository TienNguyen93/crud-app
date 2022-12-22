import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrap">
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/tasks">View All Tasks</Link>
          </li>
          <li>
            <Link to="/employees">View All Employees</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar