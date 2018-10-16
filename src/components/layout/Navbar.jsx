import React from "react";
import { Link } from "react-router-dom";
import Login from "./LoginLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";
const Navbar = props => {
  console.log(props.authentication.uid); // after loggin refresh, then u will see uid present in the authentication object
  const { uid } = props.authentication;
  const showNavLinks = uid ? <Login /> : <SignOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        TecHelp
      </Link>
      {showNavLinks}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" />
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    authentication: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
