import React, { Component } from "react";
import { connect } from "react-redux";
import { LogIn } from "../../store/actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state); // this line calls the login in mapdispatchToProps down
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    console.log(this.props); // contains authentication object
    const { authentication } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="email"
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
            Login
          </button>
        </form>
        <div>{authentication ? <p>{authentication}</p> : null}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authentication: state.authentication.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: emailpass => {
      dispatch(LogIn(emailpass));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
