import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const PostDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post Details</h1>
      <p>{params.postId}</p>
      <img src={require(`../assets/${params.postId}.jpg`)} alt="" />
      <h1>{data[params.postId-1].title}</h1>
    </div>
  );
};

export default PostDetails;
