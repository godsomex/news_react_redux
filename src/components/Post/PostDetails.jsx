import React from "react";

const PostDetails = props => {
  console.log(props); // the route component sends a props by default which includes the match.params.id
  const id = props.match.params.id;
  return (
    <div className="container card">
      <img
        className="card-img-top"
        src="https://www.gstatic.com/webp/gallery3/3.png"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Card title & {id}</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
