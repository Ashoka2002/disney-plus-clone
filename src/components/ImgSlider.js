import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images/slider-badging.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badag.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scale.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scales.jpg" alt="slider" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &::before {
      color: #fff;
      font-size: 10px;
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.3s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.7);
    }
  }
`;
