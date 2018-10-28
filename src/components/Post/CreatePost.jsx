import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
class CreatePost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="title">Title of Post</label>
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

const mapDispatchToProps = dispatch => {
  // console.log(state);
  return {
    createPost: post => {
      return dispatch(createPost(post));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreatePost);
