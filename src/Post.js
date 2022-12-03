import React from "react";

function Post({ item }) {
  return (
    <article align="center" className="bg-slate-200 m-8 p-8 max-w-xl ">
      <h1 className="font-bold">{item.title}</h1>
      <p>
        {item.desc.length <= 100 ? item.desc : item.desc.slice(0, 100) + "..."}
      </p>
    </article>
  );
}

export default Post;
