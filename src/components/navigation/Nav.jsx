import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <NavBar>
        <Link to="/" style={{ textDecoration: "none", color: "#3c9654" }}>
          <h1
            style={{
              fontWeight: "lighter",
              fontStyle: "italic",
              color: "#3c9654",
            }}
          >
            Blog App
          </h1>
        </Link>
        <LinkContainer>
          <Link to="/" style={{ textDecoration: "none", color: "#3c9654" }}>
            Home
          </Link>
          <Link to="/post" style={{ textDecoration: "none", color: "#3c9654" }}>
            Post
          </Link>
        </LinkContainer>
      </NavBar>
    </>
  );
};

const NavBar = styled.nav`
  background: #032b0d;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 1.8rem;
`;

export default Nav;
