import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

function ProductSlider({ header, product1, product2, product3 }) {
  const history = useHistory();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {' '}
      <SwiperSlide>Slide 1</SwiperSlide>
      {/* <TestDiv>
          <ProductCard product={product1} />
        </TestDiv>
        <TestDiv>
          <ProductCard product={product1} />
        </TestDiv> */}
    </Swiper>
  );
}

export default ProductSlider;

const ProductSliderDiv = styled.div`
  margin-left: 1em;
  text-align: left;
`;

const TitleH1 = styled.h1`
  margin: 0.5em 0;
  font-family: Jacques Francois;
`;

const TestDiv = styled.div``;
