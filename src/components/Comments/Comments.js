import React from "react";
import Comment from "./Comment";
import "./Comments.css";

//CHECK THIS FILE
const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props.comments;

  return (
    <div>
      {props.comments.map((item, index) => {
        return <Comment data={item} key={index} />;
      })}
    </div>
  );
};

export default Comments;
