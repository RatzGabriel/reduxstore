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
    window.scrollTo(0, 0);
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
                  <ImageDiv>
                    <Image src={item} alt="test" />
                  </ImageDiv>
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
          <ButtonProduct bg={'/images/gpay.png'}></ButtonProduct>
        </ProductDetailsDiv>
      </ProductDiv>
    </MainDiv>
  );
}

export default ProductCard;
const ImageDiv = styled.div`
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
`;

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
  background-color: rgb(58, 180, 197);
  width: 100%;
`;

const ButtonProduct = styled.button`
  margin: 2em 0em;
  padding: 1em 3em;
  border: none;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border: 1px solid black;
  cursor: pointer;
`;

const ProductDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 962px) {
    padding: 0em 0em;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  width: 90%;
  height: 80%;
  margin: 0;
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
