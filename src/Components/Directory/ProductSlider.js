import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { color } from '../../colors';
import { Link } from 'react-router-dom';

import 'swiper';
import './styles.css';
SwiperCore.use([Pagination]);

function ProductSlider({ header, product1, product2, product3, dm }) {
  return (
    <DivMain>
      <div>
        <H1Title dm={dm} color={color}>
          {header}
        </H1Title>
      </div>
      <DivDesktop>
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
      </DivDesktop>
      <div>
        <DivTest>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductCard product={product1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard product={product1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard product={product1} />
            </SwiperSlide>
          </Swiper>
        </DivTest>
      </div>
    </DivMain>
  );
}

export default ProductSlider;

const DivDesktop = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  justify-content: space-between;
  @media (max-width: 962px) {
    display: none;
  }
`;

const DivTest = styled.div`
  @media (min-width: 962px) {
    display: none;
  }
`;

const DivMain = styled.div`
  margin-left: 1em;
  text-align: left;

  @media (min-width: 962px) {
    text-align: center;
  }
`;

const H1Title = styled.h1`
  font-family: Jacques Francois;
  margin: 1em 0;
  font-size: large;
  color: ${(props) => (props.dm ? 'white' : props.color)};
  @media (min-width: 962px) {
    font-size: 4rem;
  }
`;
