//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = ({ dummydata }) => { 
  return (
    <div className="posts-container-wrapper">      
      {dummydata.map((data, i) => {
        return <Post key={i} post={data} />
      })}
    </div>
  );
};

export default PostsPage;

