import React from 'react';
import styled from 'styled-components';
import { color } from '../../colors';
import { useDispatch } from 'react-redux';

import { addProduct, reduceCartItem } from '../../Redux/Cart/cart.action';

function CartMenuItem({ item }) {
  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const removeItem = (reduceCartIt) => {
    dispatch(reduceCartItem(reduceCartIt));
  };
  return (
    <DivMain>
      <DivHalfLeft>
        <ImgItem src={item.productThumbnail} alt={item.productName} />
      </DivHalfLeft>
      <DivHalfRight>
        <H4>{item.productName}</H4>
        <P>{item.productPrice} €</P>
        <DivButtons>
          <DivInnerButton>
            <ButtonSmall onClick={() => removeItem(item)} color={color}>
              -
            </ButtonSmall>
            <p>{item.quantity}</p>
            <ButtonSmall onClick={() => handleAddProduct(item)} color={color}>
              +
            </ButtonSmall>
          </DivInnerButton>
        </DivButtons>
      </DivHalfRight>
    </DivMain>
  );
}

export default CartMenuItem;

const ButtonSmall = styled.button`
  border-radius: 50%;
  border: none;
  color: white;
  background-color: ${(props) => props.color};
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DivButtons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const DivInnerButton = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 0.3em;
  background-color: white;
`;

const P = styled.p`
  color: white;
  font-size: 0.8em;
`;

const H4 = styled.h4`
  color: white;
  font-size: 0.8em;
`;

const DivHalfRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  align-self: center;
  text-align: right;
  margin: 1em 1em;
  height: 80%;
`;

const DivHalfLeft = styled.div`
  width: 50%;
  display: flex;

  align-self: center;
`;

const ImgItem = styled.img`
  height: 7em;
  margin: 1em;
`;

const DivMain = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  height: 9em;
`;
