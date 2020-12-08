import React from "react";
import Post from "./Post"; //*This allows exports to to flow up
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props; //The DATA is here!

  console.log(posts);

  //*You return so that things can render, you can;'t render only htmnl. Therefor you must have <tags></tags>

  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((item) => {
        return <Post post={item} likePost={likePost} />;
        // return<
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
