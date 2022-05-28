import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { updatePost } from "../../features/postSlice";
import PostForm from "./PostForm";

const EditPost = () => {
  const params = useParams();
  const postId = params.postId;
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.filter((post) => post.id === parseInt(postId));
  const [postTitle, setPostTitle] = useState(post[0].title);
  const [postContent, setPostContent] = useState(post[0].body);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onUpdatePost = () => {
    dispatch(updatePost({ postId, title: postTitle, body: postContent }));
    navigate("/");
  };

  return (
    <PostForm
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postContent={postContent}
      setPostContent={setPostContent}
    >
      <StyledBtn onClick={onUpdatePost}>Update Post</StyledBtn>
    </PostForm>
  );
};

const StyledBtn = styled.button`
  padding: 0.8rem;
  color: white;
  background: #808c83;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 5px;
  border: none;
`;
export default EditPost;
