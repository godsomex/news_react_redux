import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../Post/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { posts, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <PostList posts={posts} />
          </div>
          <div className="col-12 col-md-5">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //1. console.log(state);// if we console state here we get two objects we have in our allReducers function in allreducers.js
  // if we log out state after firestoreConnect connection we get objects from firebase db
  console.log(state);
  return {
    posts: state.firestore.ordered.post, //to get the objects in the firebase database
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "post", orderBy: ["postedOn", "desc"] },
    { collection: "notifications", limit: 2, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
