import React from "react";
import { useParams } from "react-router-dom";

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
      </article>
    </main>
  );
};

export default PostPage;
