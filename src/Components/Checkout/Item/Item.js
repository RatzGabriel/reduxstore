import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

//action
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from '../../../Redux/Cart/cart.action';
import { removeWlItem } from '../../../Redux/WishList/wishlist.action';

function Item({ product, text }) {
  console.log('text', text);
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
    <MainDiv>
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
              onClick={() => handleAddProduct(product)}
            >{`Add to Cart`}</Button>
          )}
          {text === 'cart' && (
            <Button onClick={() => removeItem(product)}>{`-`}</Button>
          )}
          {text === 'cart' && <span>{quantity}</span>}
          {text === 'cart' && (
            <Button onClick={() => handleAddProduct(product)}>{`+`}</Button>
          )}
        </RowDiv>
        <RowDiv>
          {text === 'cart' && (
            <SpanSmall onClick={() => handleRemoveCartItem(documentID)}>
              Remove
            </SpanSmall>
          )}
          {text === 'wishlist' && (
            <SpanSmall onClick={() => handleRemoveWlItem(documentID)}>
              Remove
            </SpanSmall>
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
  color: white;
`;

const SpanSmall = styled.span`
  font-size: 0.5em;
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
`;

const Img = styled.img`
  height: 3em;
  padding: 0.4em;
`;
