import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Elements/Button/Button';
import { addProduct } from '../../../Redux/Cart/cart.action';

import styled from 'styled-components';

function Product(product) {
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
    <MainDiv
      onMouseEnter={() => {
        setBackground(0.6);
        setButtonStatus('block');
      }}
      onMouseLeave={() => {
        setBackground(1);
        setButtonStatus('none');
      }}
    >
      <StyledLink to={`/product/${documentID}`}>
        <CardDiv image={productThumbnail} hover={backGround}>
          <ButtonElement
            vis={buttonStatus}
            onClick={() => handleAddToCard(product)}
            {...configAddToCartBtn}
          >
            {productPrice} €
          </ButtonElement>
        </CardDiv>
      </StyledLink>
    </MainDiv>
  );
}

export default Product;

const MainDiv = styled.div`
  display: flex;
  margin: 2rem 2rem;
  width: 30rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  cursor: pointer;
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bg || 'white'};
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 35px;
  font-weight: 600;
  min-height: 40px;
  font-size: 18px;
  width: 6rem;
  border: none;
  position: absolute;
  display: ${(props) => (props.vis === 'none' ? 'none' : 'block')};
  cursor: pointer;
`;

const CardDiv = styled.div`
  position: relative;
  background-image: url('${(props) => props.image}');
  height: 30rem;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`;
