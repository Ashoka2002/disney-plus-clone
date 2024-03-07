import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="Viewrs" />
        <video autoPlay={true} loop muted playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          Video not supports!
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="Viewrs" />
        <video autoPlay={true} loop muted playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="Viewrs" />
        <video autoPlay={true} loop muted playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="Viewrs" />
        <video autoPlay={true} loop muted playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="Viewrs" />
        <video autoPlay={true} loop muted playsInline={true}>
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: 250ms all ease;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
    overflow: hidden;

    video {
      opacity: 1;
    }
  }
`;
