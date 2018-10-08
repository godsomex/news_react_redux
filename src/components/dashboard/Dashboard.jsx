import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../Post/PostList";
class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <PostList />
          </div>
          <div className="col-12 col-md-5">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
