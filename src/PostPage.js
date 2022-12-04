import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ items, handleDelete }) => {
  const { id } = useParams();
  const post = items.find((item) => item.id.toString() === id);
  return (
    <main className="h-[100vh] p-4">
      <article>
        {post && (
          <>
            <h2 className="font-bold pb-8 text-xl">{post.title}</h2>
            <p className="pb-8">{post.desc}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </>
        )}
        {!post && (
          <main className="absolute flex-col items-center justify-center top-[40%] left-[25%] ">
            <h2 className="text-red-700">Post has been deleted!!</h2>

            <Link to="/">
              <button className=" my-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                visit out home page
              </button>
            </Link>
          </main>
        )}
      </article>
    </main>
  );
};

export default PostPage;
