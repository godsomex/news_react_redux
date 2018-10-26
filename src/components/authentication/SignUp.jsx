import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <div>{authError ? <p>{authError} </p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.authentication.authError
  };
};

const mapsDispatchToProps = dispatch => {
  return {
    signup: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(SignUp);
