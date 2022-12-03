import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-8 relative bottom-0 p-6 bg-blue-400 text-white font-bold flex items-center justify-center ">
      <h2>copyright @ {year}</h2>
    </footer>
  );
}

export default Footer;
