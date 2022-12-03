import React from "react";
import { Link } from "react-router-dom";
function Post({ item }) {
  return (
    <article align="center" className="bg-slate-200 m-8 p-8  ">
      <Link to={`/post/${item.id}`}>
        {" "}
        <h1 className="font-bold">{item.title}</h1>
      </Link>
      <p>
        {item.desc.length <= 100 ? item.desc : item.desc.slice(0, 100) + "..."}
      </p>
    </article>
  );
}

export default Post;
