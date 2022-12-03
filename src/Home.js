import React from "react";
import Feed from "./Feed";

const Home = ({ items }) => {
  return (
    <main className="flex-col  h-[100vh]">
      {items.length ? (
        <Feed items={items} />
      ) : (
        <p className="text-red-600 p-8">no post to display !!</p>
      )}
    </main>
  );
};

export default Home;
