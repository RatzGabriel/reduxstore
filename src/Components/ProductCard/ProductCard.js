import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';

const mapState = (state) => ({
  product: state.productsData.product,
});

function ProductCard() {
  const { product } = useSelector(mapState);
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { productName, productThumbnail, productPrice, productDescription } =
    product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  return (
    <MainDiv>
      <Testing>
        <Carousel infiniteLoop={true} showStatus={false} showArrows={false}>
          {Array.isArray(product.thumbnailArray) &&
            product.thumbnailArray.length > 0 &&
            product.thumbnailArray.map((item, index) => {
              if (item.length > 0) {
                return (
                  <div>
                    <img src={item} alt="test" />
                  </div>
                );
              }
            })}
        </Carousel>
      </Testing>
      <ProductDiv>
        <ProductDetailsDiv>
          <h1>{productName}</h1>
          <p>{productPrice}€</p>
          <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
          <Name>Add to cart</Name>
          <ButtonProduct>Buy with Gpayy</ButtonProduct>
        </ProductDetailsDiv>
      </ProductDiv>
    </MainDiv>
  );
}

export default ProductCard;

const Testing = styled.div`
  width: 50%;
  height: 50%;
  @media (max-width: 962px) {
    width: 100%;
  }
`;

const Name = styled.button`
  color: black;
  border: none;
  top: 10%;
  left: 40%;
  color: white;
  background-color: brown;
  width: 100%;
`;

const ButtonProduct = styled.button`
  margin: 2em 0em;
  padding: 1em;
  border: none;
`;

const ProductDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  justify-content: flex-start;
  @media (max-width: 962px) {
    padding: 3em 0em;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  width: 90%;
  height: 80%;

  padding: 0em 0em 0em 0em;
  @media (max-width: 962px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 962px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 8em;
  }
`;
