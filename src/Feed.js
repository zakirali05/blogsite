import React from "react";
import Post from "./Post";
const Feed = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </>
  );
};

export default Feed;
