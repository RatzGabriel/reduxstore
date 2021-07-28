import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
  fade: true,
};

function MainPageImage({ productOne, productTwo, productThree, productFour }) {
  return (
    <Slider {...settings}>
      <TestingAgain>
        <Style to="search">
          <Img src={productOne.productThumbnail} alt={productOne.productName} />
          <Name>{productOne.productName}</Name>
        </Style>
      </TestingAgain>
      <TestingAgain>
        <Style to="search">
          <Img src={productTwo.productThumbnail} alt={productTwo.productName} />
          <Name>{productTwo.productName}</Name>
        </Style>
      </TestingAgain>
      <TestingAgain>
        <Style to="search">
          <Img
            src={productThree.productThumbnail}
            alt={productThree.productName}
          />
          <Name>{productThree.productName}</Name>
        </Style>
      </TestingAgain>
      <TestingAgain>
        <Style to="search">
          <Img
            src={productFour.productThumbnail}
            alt={productFour.productName}
          />
          <Name>{productFour.productName}</Name>
        </Style>
      </TestingAgain>
    </Slider>
  );
}

export default MainPageImage;

const Style = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Img = styled.img`
  height: 30em;
  position: relative;
  width: 100%;
`;

const Name = styled.button`
  color: black;
  border: none;
  top: 10%;
  left: 40%;
  color: white;
  background-color: black;
`;

const TestingAgain = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
  }
`;
