import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
const PostDetails = props => {
  console.log(props); // the route component sends a props by default which includes the match.params.id and now it contains posts objects after mapstatetoprops
  const id = props.match.params.id;
  const { posts } = props;
  if (posts) {
    return (
      <div className="container card">
        <img
          className="card-img-top"
          src="https://www.gstatic.com/webp/gallery3/3.png"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title"> {posts.title} </h5>
          <p className="card-text">{posts.content}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {" "}
        <h3>loading post</h3>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);// contains the match object
  console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.post;
  const post = posts ? posts[id] : null;
  return { posts: post };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "post" }])
)(PostDetails);
