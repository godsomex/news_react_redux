import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/Post/PostDetails";
import SignUp from "./components/authentication/SignUp";
import Login from "./components/authentication/Login";
import CreatePost from "./components/Post/CreatePost";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/create" component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
