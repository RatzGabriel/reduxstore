import React from 'react';
import styled from 'styled-components';
import ProductSlider from './ProductSlider';

function Bestseller() {
  const product1 = {
    title: 'Vase1',
    img: '/images/16.jpeg',
    price: '9.80 Euro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  const product2 = {
    title: 'Vase2',
    img: '/images/16.jpeg',
    price: '9.80 Euro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  const product3 = {
    title: 'Vase3',
    img: '/images/16.jpeg',
    price: '9.80 Euro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem sequi maxime possimus ',
  };

  return (
    <div>
      <BannerImg src="/images/banner1.jpeg" alt="" />
      <ProductSlider
        header="Our Bestseller"
        product1={(product1, product2, product3)}
      />
    </div>
  );
}

export default Bestseller;

const BannerImg = styled.img`
  height: 129px;
  width: 100%;
  margin: 0 0 0em 0em;
`;
