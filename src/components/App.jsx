import React from "react";
import Nav from "./navigation/Nav";
import PostList from "./post/PostList";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PostDetail from "./post/PostDetail";
import EditPost from "./post/EditPost";
import AddPost from "./post/AddPost";

const App = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={users.length > 0 && <PostList />} />
        <Route path="/post" element={users.length > 0 && <AddPost />} />
        <Route path="/post/view/:postId" element={<PostDetail />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
      </Routes>
    </>
  );
};

export default App;
