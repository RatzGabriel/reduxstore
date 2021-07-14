import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EuroIcon from '@material-ui/icons/Euro';

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
  const {
    productName,
    productThumbnail,
    productPrice,
    productDescription,
    secondImage,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const configAddToCartBtn = {
    type: 'button',
    bg: 'black',
    color: 'white',
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  return (
    <MainDiv>
      <div>
        <Image src={productThumbnail} alt="" />
        {secondImage && <Image src={secondImage} alt="" />}
      </div>
      <H1>{productName}</H1>

      <h2>
        Price:{productPrice}
        <EuroIcon />
      </h2>

      <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
        Add to Cart Btn
      </Button>
      <Li>
        <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
      </Li>
    </MainDiv>
  );
}

export default ProductCard;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 20em;
  width: 15em;
`;

const H1 = styled.h1`
  border-bottom: 1px solid black;
`;

const Li = styled.li`
  border: 1px solid black;
  list-style: none;
`;
