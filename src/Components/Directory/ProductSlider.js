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
      <div>
        <>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to={`/product/${product1.documentID}`}>
                <ProductCard product={product1} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/product/${product1.documentID}`}>
                <ProductCard product={product1} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/product/${product1.documentID}`}>
                <ProductCard product={product1} />
              </Link>
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
  margin: 1em 0;
  font-size: large;
  color: ${(props) => (props.dm ? 'white' : props.color)};
`;
