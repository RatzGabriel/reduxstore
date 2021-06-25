import React from 'react';
import Button from '../../Elements/Button/Button';

function Product({ productThumbnail, productName, productPrice }) {
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
      {productName}${productPrice}
      <div>
        <Button {...configAddToCartBtn}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default Product;
