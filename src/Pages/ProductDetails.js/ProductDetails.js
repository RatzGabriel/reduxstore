import React from 'react';
import ProductCardSinglePage from '../ProductCard/ProductCard';

function ProductDetails({ dm }) {
  return (
    <div>
      <ProductCardSinglePage dm={dm} />
    </div>
  );
}

export default ProductDetails;
