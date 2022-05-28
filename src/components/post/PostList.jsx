import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchPosts, deletePost } from "../../features/postSlice";
import PostReactionBtn from "./PostReactionBtn";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle" && error === null) {
      dispatch(fetchPosts());
    }
  }, [status, error, dispatch]);

  const renderedPost = posts.map((post) => {
    const user = users.filter((user) => user.id === post.userId);
    return (
      <SinglePost key={post.id}>
        <h2 style={{ marginTop: "1rem" }}>{post.title}</h2>
        <p>{post.body.substring(0, 100)}</p>
        <Author>By {user[0].name}</Author>
        <PostReactionBtn post={post} />
        <LinkContainer>
          <StyledLink to={`/post/view/${post.id}`}>View</StyledLink>
          <Styledbtn onClick={() => dispatch(deletePost({ postId: post.id }))}>
            Delete
          </Styledbtn>
        </LinkContainer>
      </SinglePost>
    );
  });
  return <PostsContainer>{renderedPost}</PostsContainer>;
};

const PostsContainer = styled.div`
  margin: 0rem auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const SinglePost = styled.article`
  padding: 1.2rem 2rem;
  width: 50%;
  border: 1px solid;
  border-radius: 10px;
`;

const Author = styled.address`
  margin-top: 0.8rem;
  font-weight: 450;
`;

const StyledLink = styled(Link)`
  padding: 0.8rem;
  color: white;
  background: #808c83;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 5px;
`;
const Styledbtn = styled.button`
  padding: 0.8rem;
  color: white;
  background: #808c83;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 5px;
  border: none;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default PostList;
