import React from 'react';
import Button from '../../Elements/Button/Button';
import { Link } from 'react-router-dom';

function Product({ productThumbnail, productName, productPrice, documentID }) {
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

  return (
    <div>
      <h1>Products</h1>
      <Link to={`/product/${documentID}`}>{productName}</Link>${productPrice}
      <Link to={`/product/${documentID}`}>
        <img src={productThumbnail} alt={productName} />
      </Link>
      <div>
        <Button {...configAddToCartBtn}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default Product;
