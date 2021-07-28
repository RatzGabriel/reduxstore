import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

//action
import {
  addProduct,
  reduceCartItem,
  removeCartItem,
} from '../../../Redux/Cart/cart.action';

import { removeWlItem, clearWL } from '../../../Redux/WishList/wishlist.action';

function Item(product, text) {
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
          <SpanSmall>{productPrice} Euro</SpanSmall>
        </ColumnDiv>
      </Left>
      <Right>
        <RowDiv>
          {text && (
            <Button
              onClick={() => handleAddProduct(product)}
            >{`Add to Cart`}</Button>
          )}
          {!text && <Button onClick={() => removeItem(product)}>{`-`}</Button>}
          {!text && <span>{quantity}</span>}
          {!text && (
            <Button onClick={() => handleAddProduct(product)}>{`+`}</Button>
          )}
        </RowDiv>
        <RowDiv>
          {!text && (
            <SpanSmall onClick={() => handleRemoveCartItem(documentID)}>
              Remove
            </SpanSmall>
          )}
          {text && (
            <SpanSmall onClick={() => handleRemoveWlItem(documentID)}>
              Remove from WishList
            </SpanSmall>
          )}
        </RowDiv>
      </Right>
    </MainDiv>
    // <ItemDiv>
    //   <Img src={productThumbnail} alt={productName} />

    //   <TestDiv>
    //     {productName}
    //     <span>
    //       <P> {productPrice} Euro</P>
    //     </span>
    //   </TestDiv>
    //   <RightDiv>
    //     <span onClick={() => removeItem(product)}>{`-`}</span>

    //     <span>{quantity}</span>
    //     <span onClick={() => handleAddProduct(product)}>{`+`}</span>
    //   </RightDiv>
    //   <RightDiv>
    //     <span onClick={() => handleRemoveCartItem(documentID)}>
    //       <P>Remove</P>
    //     </span>
    //   </RightDiv>
    // </ItemDiv>
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
  font-size: 0.3em;
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
