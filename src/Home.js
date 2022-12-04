import React from "react";
import Feed from "./Feed";

const Home = ({ items }) => {
  return (
    <main align="center" className="flex-col mb-8  h-[100%]">
      {items.length ? (
        <Feed items={items} />
      ) : (
        <p className="text-red-600 p-8">no post to display !!</p>
      )}
    </main>
  );
};

export default Home;
