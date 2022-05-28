import React, { useState } from "react";
import PostForm from "./PostForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/postSlice";
const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const onAddPost = () => {
    const user = users.filter((user) => user.id === parseInt(userId));
    const userName = user[0].name;
    dispatch(
      addPost({ userId, name: userName, title: postTitle, body: postContent })
    );
  };

  return (
    <>
      <PostForm
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postContent={postContent}
        setPostContent={setPostContent}
      >
        <SelectStyle
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value))}
        >
          <option value=""></option>
          {users.map((user) => {
            return (
              <>
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              </>
            );
          })}
        </SelectStyle>
        <StyledBtn onClick={onAddPost}>Add Post</StyledBtn>
      </PostForm>
    </>
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
const SelectStyle = styled.select`
  width: 35%;
  border: none;
  padding: 0.8rem;
  background: #808c83;
  color: white;
  border-radius: 5px;
  margin: 0 auto 1.5rem auto;
`;

export default AddPost;
