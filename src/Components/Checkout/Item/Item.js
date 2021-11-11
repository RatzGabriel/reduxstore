import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from '../../../Redux/Cart/cart.action';
import { removeWlItem } from '../../../Redux/WishList/wishlist.action';

import { color } from '../../../colors';

function Item({ product, text, dm }) {
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;
  const dispatch = useDispatch();

  const handleRemoveCartItem = (documentID) => {
    dispatch(removeCartItem(documentID));
  };

  const handleRemoveWlItem = (documentID) => {
    dispatch(removeWlItem(documentID));
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const removeItem = (reduceCartIt) => {
    dispatch(reduceCartItem(reduceCartIt));
  };

  return (
    <DivMain dm={dm}>
      <DivLeft>
        <Img src={productThumbnail} alt="" />
        <DivColumn>
          {productName}
          <SpanSmall>
            {(Math.round(productPrice * 100) / 100).toFixed(2)} Euro
          </SpanSmall>
        </DivColumn>
      </DivLeft>
      <DivRight>
        <DivRow>
          {text === 'wishlist' && (
            <Button
              dm={dm}
              onClick={() => handleAddProduct(product)}
            >{`Add to Cart`}</Button>
          )}
          {text === 'cart' && (
            <Button dm={dm} onClick={() => removeItem(product)}>{`-`}</Button>
          )}
          {text === 'cart' && <span>{quantity}</span>}
          {text === 'cart' && (
            <Button
              dm={dm}
              onClick={() => handleAddProduct(product)}
            >{`+`}</Button>
          )}
        </DivRow>
        <DivRow>
          {text === 'cart' && (
            <SpanSmallRemove onClick={() => handleRemoveCartItem(documentID)}>
              Remove
            </SpanSmallRemove>
          )}
          {text === 'wishlist' && (
            <SpanSmallRemove onClick={() => handleRemoveWlItem(documentID)}>
              Remove
            </SpanSmallRemove>
          )}
        </DivRow>
      </DivRight>
    </DivMain>
  );
}

export default Item;

const DivRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DivLeft = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.dm ? 'black' : 'white')};
`;

const SpanSmall = styled.span`
  font-size: 0.5em;
`;

const SpanSmallRemove = styled.span`
  font-size: 0.5em;
  border: 1px solid black;
`;
const DivRow = styled.div`
  display: flex;
  align-items: center;
`;

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => (props.dm ? 'white' : color)};
  color: ${(props) => (props.dm ? 'black' : 'white')};
`;

const Img = styled.img`
  height: 3em;
  padding: 0.4em;
`;
