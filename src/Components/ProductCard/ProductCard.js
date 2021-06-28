import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';
import Button from '../Elements/Button/Button';

const mapState = (state) => ({
  product: state.productsData.product,
});

function ProductCard() {
  const { product } = useSelector(mapState);
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { productName, productThumbnail, productPrice, productDescription } =
    product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const configAddToCartBtn = {
    type: 'button',
  };
  return (
    <div>
      <img src={productThumbnail} alt="" />
      <h1>{productName}</h1>
      <h2>{productPrice}</h2>
      <Button {...configAddToCartBtn}>Add to Cart Btn</Button>
      <li>
        <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
      </li>
    </div>
  );
}

export default ProductCard;
