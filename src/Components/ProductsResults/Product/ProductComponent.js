import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/cart.action';
import styled from 'styled-components';
import Rosa from 'react-on-scroll-animation';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ProductComponent({ product, pt, pb, wd, height, pName, pPrice }) {
  const dispatch = useDispatch();
  const { productThumbnail, productName, productPrice, documentID } = product;
  const [buttonStatus, setButtonStatus] = useState(false);
  const history = useHistory();
  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  ) {
    return <div>nothing to show</div>;
  }

  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push('/cart');
  };

  return (
    <MainDiv>
      <div>
        <Img src={productThumbnail} alt="" />
      </div>
      <PriceTagDiv>
        <FavoriteIcon />
        {pPrice}
        <VisibilityIcon />
      </PriceTagDiv>
    </MainDiv>
  );
}

export default ProductComponent;

const Img = styled.img`
  width: 70%;
`;

const MainDiv = styled.div``;

const PriceTagDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 70%;
  margin: 0 auto;
`;
