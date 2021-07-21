import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

//action
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from '../../../Redux/Cart/cart.action';

function Item(product) {
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;
  const dispatch = useDispatch();
  console.log(productThumbnail, productName);
  const handleRemoveCartItem = (documentID) => {
    dispatch(removeCartItem(documentID));
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const removeItem = (reduceCartIt) => {
    dispatch(reduceCartItem(reduceCartIt));
  };

  return (
    <ItemDiv>
      <Img src={productThumbnail} alt={productName} />
      <TestDiv>
        {productName}{' '}
        <span>
          <P> {productPrice} Euro</P>
        </span>
      </TestDiv>
      <div>
        <span onClick={() => removeItem(product)}>{`<`}</span>

        <span>Count: {quantity}</span>
        <span onClick={() => handleAddProduct(product)}>{`>`}</span>
      </div>
      <span onClick={() => handleRemoveCartItem(documentID)}>
        <P>Remove</P>
      </span>
    </ItemDiv>
  );
}

export default Item;

const P = styled.p`
  font-size: 0.3em;
  cursor: pointer;
`;

const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  background-color: beige;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  height: 3em;
  padding: 0.4em;
`;
