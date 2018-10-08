import React from "react";

import { NavLink } from "react-router-dom";
const SignOutLinks = () => {
  return (
    <div>
      <ul className="navbar-nav mr-auto float-right">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/signup">
            Signup <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignOutLinks;
