import React from "react";
import styled from "styled-components";

function header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="Logo" />
      <NavMenu>
        <a href="random.com">
          <img src="./images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>

        <a href="random.com">
          <img src="./images/search-icon.svg" alt="home" />
          <span>SEARCH</span>
        </a>

        <a href="random.com">
          <img src="./images/watchlist-icon.svg" alt="home" />
          <span>WATCHLIST</span>
        </a>

        <a href="random.com">
          <img src="./images/original-icon.svg" alt="home" />
          <span>ORIGINALS</span>
        </a>

        <a href="random.com">
          <img src="./images/movie-icon.svg" alt="home" />
          <span>MOVIES</span>
        </a>

        <a href="random.com">
          <img src="./images/series-icon.svg" alt="home" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://ashok-choudhary.netlify.app/img/ashok.jpg" alt="User image" />
    </Nav>
  );
}

export default header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a:link,
  a:visited {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: inherit;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      margin-left: 2px;
      position: relative;

      &:before {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -6px;
        transition: right 0.4s;
      }
    }
    &:hover {
      span::before {
        right: 0;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;

  //Test
  object-fit: cover;
  object-position: 50% 0;
`;
