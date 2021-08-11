import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { color } from '../../../colors';

//action
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from '../../../Redux/Cart/cart.action';
import { removeWlItem } from '../../../Redux/WishList/wishlist.action';

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
    <MainDiv dm={dm}>
      <Left>
        <Img src={productThumbnail} alt="" />
        <ColumnDiv>
          {productName}
          <SpanSmall>
            {(Math.round(productPrice * 100) / 100).toFixed(2)} Euro
          </SpanSmall>
        </ColumnDiv>
      </Left>
      <Right>
        <RowDiv>
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
        </RowDiv>
        <RowDiv>
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
        </RowDiv>
      </Right>
    </MainDiv>
  );
}

export default Item;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Left = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.dm === 'on' ? 'black' : 'white')};
`;

const SpanSmall = styled.span`
  font-size: 0.5em;
`;

const SpanSmallRemove = styled.span`
  font-size: 0.5em;
  border: 1px solid black;
`;
const RowDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => (props.dm === 'on' ? 'white' : color)};
  color: ${(props) => (props.dm === 'on' ? 'black' : 'white')};
`;

const Img = styled.img`
  height: 3em;
  padding: 0.4em;
`;
