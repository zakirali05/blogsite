import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react";
// import { useHistory } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import AddPost from "./AddPost";
import PostPage from "./PostPage";
import About from "./About";
import Footer from "./Footer";
import Missing from "./Missing";
import React from "react";
// import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [items, setItems] = useState([
    {
      id: 1,
      title: "first blog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      title: "second blog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      title: "third blog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      title: "fourth blog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);
  const addingpost = (e) => {
    e.prevent.default();
    const id = items.length ? items.length : 1;
    const obj = { id, title, body };
    const newitems = [...items, obj];
    setItems(newitems);
  };
  return (
    <div className="App">
      <Router>
        <Header title="Webdev Blogs" />
        <Nav search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home items={items} />} />

          <Route
            path="/addpost"
            element={
              <AddPost
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                addingpost={addingpost}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/postpage/:id" element={<PostPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
