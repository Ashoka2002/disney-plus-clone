import React, { useEffect } from "react";
import styled from "styled-components";
import { selectUserName, selectUserPhoto, setUserLogin, setUserLogout } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      dispatch(setUserLogin({ name: user.displayName, photo: user.photoURL, email: user.email }));
      navigate("/");
    });
    // eslint-disable-next-line
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(setUserLogin({ name: res.user.displayName, photo: res.user.photoURL, email: res.user.email }));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogout());
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Logo" />
      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="random.com">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>

            <a href="random.com">
              <img src="/images/search-icon.svg" alt="home" />
              <span>SEARCH</span>
            </a>

            <a href="random.com">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <span>WATCHLIST</span>
            </a>

            <a href="random.com">
              <img src="/images/original-icon.svg" alt="home" />
              <span>ORIGINALS</span>
            </a>

            <a href="random.com">
              <img src="/images/movie-icon.svg" alt="home" />
              <span>MOVIES</span>
            </a>

            <a href="random.com">
              <img src="/images/series-icon.svg" alt="home" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <span onClick={signOut}>Sign out</span>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

export default Header;

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

const SignOut = styled.div`
  position: relative;
  span {
    position: absolute;
    width: 100px;
    bottom: -40px;
    left: -30px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 4px 6px;
    z-index: 1;
    border: 1px solid #f9f9f9;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0;
    transform: 0.25s all;
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;

  //Test
  object-fit: cover;
  object-position: 50% 0;
`;

const Login = styled.div`
  border: 1px solid #fff;
  padding: 8px 16px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.6px;
  border-radius: 4px;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
  }
`;
