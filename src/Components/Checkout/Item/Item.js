import React from 'react';
import { useDispatch } from 'react-redux';

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
    <table border="0" cellPadding="10" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span onClick={() => removeItem(product)}>{`<`}</span>
            <span>{quantity} Items</span>
            <span onClick={() => handleAddProduct(product)}>{`>`}</span>
          </td>
          <td>${productPrice}</td>
          <td align="center">
            <span onClick={() => handleRemoveCartItem(documentID)}>X</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Item;