import React from "react";
import Post from "./Post";
const Feed = ({ items }) => {
  return (
    <main align="center" className="w-[100%]">
      {items.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Feed;
