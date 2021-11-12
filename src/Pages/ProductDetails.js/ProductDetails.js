import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

function ProductDetails({ dm }) {
  return (
    <div>
      <ProductCard dm={dm} />
    </div>
  );
}

export default ProductDetails;
