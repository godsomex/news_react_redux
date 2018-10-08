import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
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
      </div>
    );
  }
}
export default Login;
