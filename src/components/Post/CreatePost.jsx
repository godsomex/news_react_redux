import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    title: "",
    content: ""
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
              <label htmlFor="title">Email</label>
              <input
                onChange={this.handleChange}
                type="title"
                className="form-control"
                id="title"
                placeholder="post title"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="content">Password</label>
              <textarea
                onChange={this.handleChange}
                className="form-control"
                id="content"
                placeholder="Enter body of the Post"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
    );
  }
}
export default CreatePost;
