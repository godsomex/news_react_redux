import React from "react";
import Posts from "./Posts";
import { Link } from "react-router-dom";
const PostList = ({ posts }) => {
  //3. console.log(props); //we get three objects which represents our mocked data in our postReducer
  //const { posts } = props; //same thing with destructuring inside the argument / brackets

  return (
    <div>
      {posts &&
        posts.map(post => {
          return (
            <Link to={"/post/" + post.id} key={post.id}>
              <Posts post={post} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
