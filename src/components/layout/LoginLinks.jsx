import React from "react";
import { NavLink } from "react-router-dom";
const SignInLinks = () => {
  return (
    <div>
      <ul className="navbar-nav mr-auto  float-right">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/create">
            Create Post <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Profile
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/">
              Action
            </NavLink>
            <NavLink className="dropdown-item" to="/">
              Another action
            </NavLink>
            <div className="dropdown-divider" />
            <NavLink className="dropdown-item" to="/">
              Something else here
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SignInLinks;
