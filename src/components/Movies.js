import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice";
import { Link } from "react-router-dom";

function Movies() {
  const movies = useSelector(selectMovies);
  console.log(movies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie, i) => {
            return (
              <Link to={`/detail/${movie.id}`} key={i}>
                <Wrap>
                  <img src={movie.cardImg} alt={movie.type} />
                </Wrap>
              </Link>
            );
          })}
        {/* <Wrap>
          <img src="images/viewers-disney.png" alt="data" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding-bottom: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: 250ms all ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    //test
    background-color: #777;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
