//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = ({ dummydata }) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummydata.map((data, i) => {
        return <Post key={i} post={data} />
      })}
    </div>
  );
};

export default PostsPage;

