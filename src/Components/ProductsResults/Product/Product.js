import React from 'react';

function Product({ productThumbnail, productName, productPrice }) {
  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  ) {
    return null;
  }
  return (
    <div>
      <h1>Products</h1>
      {productName}${productPrice}
    </div>
  );
}

export default Product;
