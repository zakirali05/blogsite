import React from "react";

const Header = ({ title }) => {
  return (
    <header className="h-8 p-6 bg-blue-400 text-white font-bold flex items-center justify-center ">
      <h1>
        <em>{title}</em>
      </h1>
    </header>
  );
};

export default Header;
