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
          <Button onClick={() => removeItem(product)}>{`-`}</Button>
          <span>{quantity}</span>
          <Button onClick={() => handleAddProduct(product)}>{`+`}</Button>
        </RowDiv>
        <RowDiv>
          <SpanSmall onClick={() => handleRemoveCartItem(documentID)}>
            Remove
          </SpanSmall>
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
