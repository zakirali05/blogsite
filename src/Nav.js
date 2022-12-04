import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="bg-slate-700 h-22 ">
      <form align="center" className="pt-3" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <input
          className="px-4 py-1 rounded-xl"
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search something..."
        />
        <ul className="flex justify-center gap-8 pt-2 text-white">
          <Link to={"/"}>
            {" "}
            <li className="hover:bg-white  hover:text-black cursor-pointer p-1">
              Home
            </li>
          </Link>
          <Link to={"/addpost"}>
            <li className="hover:bg-white hover:text-black cursor-pointer p-1">
              Addpost
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:bg-white hover:text-black cursor-pointer p-1">
              About
            </li>
          </Link>
        </ul>
      </form>
    </nav>
  );
};

export default Nav;
