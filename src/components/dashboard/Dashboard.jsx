import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../Post/PostList";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    //2. console.log(this.props); // this gives us list of objects including the post object from mapstateToprops
    const { posts } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <PostList posts={posts} />
          </div>
          <div className="col-12 col-md-5">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //1. console.log(state);// if we console state here we get two objects we have in our allReducers function in allreducers.js

  return {
    posts: state.post.posts
  };
};
export default connect(mapStateToProps)(Dashboard);
