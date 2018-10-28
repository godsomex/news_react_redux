import React from "react";
import moment from "moment";

const Posts = ({ post }) => {
  console.log(post);
  return (
    <div className="card ">
      <img
        className="card-img-top"
        src="https://www.gstatic.com/webp/gallery3/3.png"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">Posted by: {post.authorName}</p>
        <p className="card-text">
          <small className="text-muted">
            {moment(post.postedOn.toDate()).calendar()}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Posts;
