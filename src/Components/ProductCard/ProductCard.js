import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';
import Button from '../Elements/Button/Button';
import { addProduct } from '../../Redux/Cart/cart.action';

const mapState = (state) => ({
  product: state.productsData.product,
});

function ProductCard() {
  const { product } = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { productName, productThumbnail, productPrice, productDescription } =
    product;

  useEffect(() => {
    console.log(productID);
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  return (
    <div>
      <img src={productThumbnail} alt="" />
      <h1>{productName}</h1>
      <h2>{productPrice}</h2>
      <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
        Add to Cart Btn
      </Button>
      <li>
        <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
      </li>
    </div>
  );
}

export default ProductCard;
