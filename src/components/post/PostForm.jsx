import React from "react";
import styled from "styled-components";

const PostForm = ({
  postTitle,
  postContent,
  setPostTitle,
  setPostContent,
  children,
}) => {
  return (
    <>
      <EditContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <label htmlFor="title">Title: </label>
          <textarea
            style={{
              padding: "0.4rem 0.8rem",
              scrollbarWidth: "none",
              resize: "none",
            }}
            type="text"
            id="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            cols="60"
            rows="5"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <label htmlFor="content">Body: </label>
          <textarea
            style={{
              padding: "0.4rem 0.8rem",
              scrollbarWidth: "none",
              resize: "none",
            }}
            cols="60"
            rows="8"
            type="text"
            id="content"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        {children}
      </EditContainer>
    </>
  );
};

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default PostForm;
