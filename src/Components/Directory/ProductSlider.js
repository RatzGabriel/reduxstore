import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper';
import './styles.css';
SwiperCore.use([Pagination]);

function ProductSlider({ header, product1, product2, product3 }) {
  const history = useHistory();
  return (
    <DivMain>
      <div>
        <H1Title>{header}</H1Title>
      </div>
      <div>
        <>
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
        </>
      </div>
    </DivMain>
  );
}

export default ProductSlider;

const DivMain = styled.div`
  margin-left: 1em;
  text-align: left;
`;

const H1Title = styled.h1`
  font-family: Jacques Francois;
  margin: 0.5em 0;
`;
