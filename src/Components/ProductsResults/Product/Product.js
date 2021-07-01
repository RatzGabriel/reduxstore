import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../Elements/Button/Button';
import { addProduct } from '../../../Redux/Cart/cart.action';

function Product(product) {
  const { productThumbnail, productName, productPrice, documentID } = product;

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
    <div>
      <h1>Products</h1>
      <Link to={`/product/${documentID}`}>{productName}</Link>${productPrice}
      <Link to={`/product/${documentID}`}>
        <img src={productThumbnail} alt={productName} />
      </Link>
      <div>
        <Button
          onClick={() => handleAddToCard(product)}
          {...configAddToCartBtn}
        >
          Add to Card
        </Button>
      </div>
    </div>
  );
}

export default Product;
