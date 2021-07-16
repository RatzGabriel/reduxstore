import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Elements/Button/Button';
import { addProduct } from '../../../Redux/Cart/cart.action';

import styled from 'styled-components';

function Product({ product, pt, margin }) {
  const { productThumbnail, productName, productPrice, documentID } = product;
  const [buttonStatus, setButtonStatus] = useState('none');
  const [backGround, setBackground] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  ) {
    return <div>nothing</div>;
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
    <StyledLink
      paddin={pt}
      margin={pt}
      to={`/product/${documentID}`}
      onMouseEnter={() => {
        setBackground(0.6);
        setButtonStatus('block');
      }}
      onMouseLeave={() => {
        setBackground(1);
        setButtonStatus('none');
      }}
    >
      <Img src={productThumbnail}></Img>
      <ButtonElement
        vis={buttonStatus}
        onClick={() => handleAddToCard(product)}
        {...configAddToCartBtn}
      >
        {productPrice} €
      </ButtonElement>
    </StyledLink>
  );
}

export default Product;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: flex-start;

  padding-top: ${(props) => props.padding || '1em'};
  margin-top: ${(props) => props.margin || '1em'};
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding-left: 10em;
  padding-right: 10em;
  border-radius: 35px;
  font-weight: 600;
  min-height: 40px;
  font-size: 18px;
  width: 6rem;
  border: none;
  position: absolute;
  display: ${(props) => (props.vis === 'none' ? 'none' : 'block')};
  cursor: pointer;
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;

const Img = styled.img`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
