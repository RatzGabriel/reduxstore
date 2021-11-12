import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { color } from '../../colors';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';
import ButtonElement from '../Elements/Button/Button';

import { addProduct, reduceCartItem } from '../../Redux/Cart/cart.action';

const mapState = (state) => ({
  product: state.productsData.product,
});

function ProductCard({ dm }) {
  const { product } = useSelector(mapState);

  const dispatch = useDispatch();
  const { productID } = useParams();
  const { productName, productPrice, productDescription, quantity } = product;

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const removeItem = (reduceCartIt) => {
    dispatch(reduceCartItem(reduceCartIt));
  };

  useEffect(() => {
    dispatch(fetchProductStart(productID));
    window.scrollTo(0, 0);
    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  return (
    <MainDiv dm={dm}>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
      >
        {Array.isArray(product.thumbnailArray) &&
          product.thumbnailArray.length > 0 &&
          product.thumbnailArray.map((item, index) => {
            if (item.length > 0) {
              return (
                <DivTest>
                  <Image src={item} alt="test" />
                </DivTest>
              );
            }
          })}
      </Carousel>
      <ProductDiv color={color}>
        <DivTitle>
          <H1Title dm={dm}>{productName}</H1Title>
        </DivTitle>

        <Pprice dm={dm}>
          <H3 dm={dm}>{productPrice}€</H3>
        </Pprice>
        {!productDescription && (
          <P dm={dm}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum, dolor.
          </P>
        )}
        <P dm={dm}>{productDescription}</P>
        <div>
          <ButtonElement onClick={() => handleAddProduct(product)}>
            ADD TO BASKET
          </ButtonElement>
        </div>
      </ProductDiv>
    </MainDiv>
  );
}

export default ProductCard;

const P = styled.p`
  color: ${(props) => (props.dm ? 'white' : 'black')};
  padding: 0em 0em 2em 0em;
`;

const H3 = styled.h3`
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const DivTest = styled.div`
  height: 20em;
`;

const Pprice = styled.p`
  margin: 1em 0;
  padding: 0;
  font-size: 1.8rem;
`;

const H1Title = styled.h1`
  font-family: roboto;
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2em 0 1em 0;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;

const ProductDiv = styled.div`
  display: flex;
  margin: 0em 1em;
  color: ${(props) => props.color};

  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
  @media (max-width: 962px) {
    width: 100%;
    margin: 0 auto;
    padding: 4em 0;
    min-height: 100vh;
  }
`;
