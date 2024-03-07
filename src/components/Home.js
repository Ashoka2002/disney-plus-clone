import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, setMovies } from "../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const recommended = movies.filter((movie) => movie.type === "recommend");
  const newToDisney = movies.filter((movie) => movie.type === "new");
  const trending = movies.filter((movie) => movie.type === "original");
  const original = movies.filter((movie) => movie.type === "trending");

  console.log("recommended ", movies);
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const tempData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      dispatch(setMovies(tempData));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies title="Recommended for you" movies={recommended} />
      <Movies title="New to Disney+" movies={newToDisney} />
      <Movies title="Trending" movies={trending} />
      <Movies title="Original" movies={original} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    background: url("./images/home-background.png") center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
