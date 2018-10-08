import React from "react";
import Posts from "./Posts";
const PostList = ({ posts }) => {
  //3. console.log(props); //we get three objects which represents our mocked data in our postReducer
  //const { posts } = props; //same thing with destructuring inside the argument / brackets

  return (
    <div>
      {posts &&
        posts.map(post => {
          return <Posts post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostList;
