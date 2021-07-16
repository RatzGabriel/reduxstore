import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Elements/Button/Button';
import { addProduct } from '../../../Redux/Cart/cart.action';

import styled from 'styled-components';

function Product({ product, pt, margin, pb, wd }) {
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
      pb={pb}
      wd={wd}
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
        <br />
        Shop Item
      </ButtonElement>
    </StyledLink>
  );
}

export default Product;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: flex-start;
  padding: 1em;
  padding-top: ${(props) => props.padding || '1em'};
  padding-bottom: ${(props) => props.pb || '0em'};
  margin-top: ${(props) => props.margin || '1em'};
  @media (max-width: 1100px) {
    display: block;
    width: ${(props) => props.wd || '100%'};
  }
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 3%;
  padding-bottom: 3%;
  border-radius: 35px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  position: absolute;
  top: 50%;
  display: ${(props) => (props.vis === 'none' ? 'none' : 'block')};
  cursor: pointer;
  @media only screen and (max-width: 1100px) {
    display: inline-block;
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;

const Img = styled.img`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;
