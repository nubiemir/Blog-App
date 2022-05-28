import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import PostReactionBtn from "./PostReactionBtn";
const PostDetail = () => {
  const params = useParams();
  const postId = params.postId;
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.filter((post) => post.id === parseInt(postId));
  const users = useSelector((state) => state.users);
  const user = users.filter((user) => user.id === post[0].userId);
  return (
    <PostDetailStyle>
      <h1
        style={{
          fontWeight: "lighter",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        {post[0].title}
      </h1>
      <p
        style={{
          fontWeight: "lighter",
          textAlign: "justify",
          marginBottom: "1rem",
        }}
      >
        {post[0].body}
      </p>
      <Author>By {user[0].name}</Author>
      <PostReactionBtn post={post[0]} />
      <div>
        <StyledLink to={`/post/edit/${post[0].id}`}>Edit</StyledLink>
      </div>
    </PostDetailStyle>
  );
};

const StyledLink = styled(Link)`
  padding: 0.8rem;
  color: white;
  background: #808c83;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 5px;
`;

const Author = styled.address`
  margin-top: 0.8rem;
  font-weight: 450;
`;

const PostDetailStyle = styled.div`
  width: 60vw;
  margin: 2rem auto;
`;

export default PostDetail;
