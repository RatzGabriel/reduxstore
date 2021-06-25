import React, { useEffect } from 'react';
import { fetchProductsStart } from '../../Redux/Products/products.actions';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function ProductResults() {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div>
        <p>No search results</p>
      </div>
    );
  }

  return (
    <div>
      {products.map((product, position) => {
        const { productThumbnail, productName, productPrice } = product;
        if (
          !productThumbnail ||
          !productName ||
          typeof productPrice === 'undefined'
        ) {
          return null;
        }
        const configProduct = {
          productThumbnail,
          productName,
          productPrice,
        };
        return <Product {...configProduct} />;
      })}
    </div>
  );
}

export default ProductResults;
