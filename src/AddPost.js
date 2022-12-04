import React from "react";

const AddPost = ({ addingpost, title, setTitle, body, setBody }) => {
  return (
    <main className="flex-col   item-center mb-16 lg-mb-22  h-[60vh] ">
      <div className="min-h-full   flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
            <h2 className="mt-6 sm:font-light  text-center text-3xl font-extrabold text-gray-900">
              Post your Blog
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={addingpost}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="title" className="sr-only">
                  Enter the title...
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter the title..."
                />
              </div>
              <div>
                <label htmlFor="body" className="sr-only">
                  Enter the body...
                </label>
                <textarea
                  rows={7}
                  id="body"
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter the body..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddPost;
