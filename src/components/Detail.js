import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://www.desktopbackground.org/download/1400x1050/2014/12/20/874158_high-resolution-disney-princess-wallpapers-full-hd-full-size_1920x1080_h.jpg"
          alt="background"
        />
      </Background>
      <ImageTitle>
        <img src="images/viewers-disney.png" alt="Logo" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play button"></img>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play button"></img>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="play button"></img>
        </GroupWatchButton>
      </Controls>

      <h3> 2018 • 2m • family, kids, animation</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rerum vero. Harum, inventore vitae. Libero
        facere in minima voluptas aspernatur.
      </p>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100% - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  p {
    font-size: 20px;
    width: 760px;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  min-height: 170px;
  min-width: 200px;
  height: 30vh;
  width: 35vw;
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  height: 54px;
  background-color: rgb(249, 249, 249);
  padding: 0 24px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.2s;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 1px solid rgb(249, 249, 249);

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 30px;
    font-weight: 100;
    color: #fff;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.9);
`;
