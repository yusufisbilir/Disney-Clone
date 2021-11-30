import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        <a href="/">
          <img src="/images/slider-badging.jpg" alt="banner" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-badag.jpg" alt="banner" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-scale.jpg" alt="banner" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-scales.jpg" alt="banner" />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: 250ms all;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
      rgb(0 0 0 / 70%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid #b4b4b4;
    }
  }
`;

export default ImgSlider;
