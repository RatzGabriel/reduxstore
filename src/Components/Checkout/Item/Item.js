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
    <DivMain dm={dm} color={color}>
      <DivLeft>
        <Img src={productThumbnail} alt="" />
        <DivColumn dm={dm} color={color}>
          {productName}
          <SpanSmall dm={dm} color={color}>
            {(Math.round(productPrice * 100) / 100).toFixed(2)} Euro
          </SpanSmall>
        </DivColumn>
      </DivLeft>
      <DivRight>
        <DivRow>
          {text === 'wishlist' && (
            <Button
              dm={dm}
              color={color}
              onClick={() => handleAddProduct(product)}
            >{`Add to Cart`}</Button>
          )}
          {text === 'cart' && (
            <Button
              dm={dm}
              color={color}
              onClick={() => removeItem(product)}
            >{`-`}</Button>
          )}
          {text === 'cart' && <Span>{quantity}</Span>}
          {text === 'cart' && (
            <Button
              dm={dm}
              onClick={() => handleAddProduct(product)}
            >{`+`}</Button>
          )}
        </DivRow>
        <DivRow>
          {text === 'cart' && (
            <SpanSmallRemove
              dm={dm}
              onClick={() => handleRemoveCartItem(documentID)}
            >
              Remove
            </SpanSmallRemove>
          )}
          {text === 'wishlist' && (
            <SpanSmallRemove
              dm={dm}
              onClick={() => handleRemoveWlItem(documentID)}
            >
              Remove
            </SpanSmallRemove>
          )}
        </DivRow>
      </DivRight>
    </DivMain>
  );
}

export default Item;

const Span = styled.span`
  color: white;
`;

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
  color: ${(props) => (props.dm ? props.color : 'white')};
  @media (min-width: 962px) {
    border: 1px solid white;
    margin-right: 1em;
  }
`;

const SpanSmall = styled.span`
  font-size: 0.5em;
  color: ${(props) => (props.dm ? props.color : 'white')};
`;

const SpanSmallRemove = styled.span`
  font-size: 0.5em;
  border: 1px solid black;
  color: ${(props) => (props.dm ? props.color : 'white')};
  border: none;
  @media (min-width: 962px) {
    border: 1px solid white;
    margin-right: 1em;
    padding: 0.5em;
  }
`;
const DivRow = styled.div`
  display: flex;
  align-items: center;
`;

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.dm ? 'black' : 'white')};
`;

const DivMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => (props.dm ? 'white' : color)};
  color: ${(props) => (props.dm ? 'black' : 'white')};
  border-bottom: 1px solid white;
`;

const Img = styled.img`
  height: 3em;
  padding: 0.4em;
`;
