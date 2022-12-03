import React from "react";
import Feed from "./Feed";

const Home = ({ items }) => {
  return (
    <main className="flex-col  h-[100vh]">
      {items.map((item) => {
        return <Feed key={item.id} item={item} />;
      })}
    </main>
  );
};

export default Home;
