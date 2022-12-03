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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/addpost" element={<AddPost />} />

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
