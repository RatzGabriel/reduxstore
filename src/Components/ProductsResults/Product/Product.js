import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Elements/Button/Button';
import { addProduct } from '../../../Redux/Cart/cart.action';

import styled from 'styled-components';

function Product(product) {
  const { productThumbnail, productName, productPrice, documentID } = product;

  const dispatch = useDispatch();
  const history = useHistory();
  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  ) {
    return null;
  }

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  return (
    <MainDiv>
      €{productPrice}
      <StyledLink to={`/product/${documentID}`}>
        <ProductImage src={productThumbnail} alt={productName} />
      </StyledLink>
      <div>
        <Button
          onClick={() => handleAddToCard(product)}
          {...configAddToCartBtn}
        >
          Add to Card
        </Button>
      </div>
    </MainDiv>
  );
}

export default Product;

const MainDiv = styled.div`
  background-color: gray;
  margin: 2rem 2rem;
  display: flex;
  width: 30rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const ProductImage = styled.img`
  height: 13rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding-right: 2rem;
  display: flex;
`;
