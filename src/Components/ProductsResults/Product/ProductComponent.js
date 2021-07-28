import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/cart.action';
import styled from 'styled-components';
import Rosa from 'react-on-scroll-animation';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addToWL } from '../../../Redux/WishList/wishlist.action';

function ProductComponent({ product, pt, pb, wd, height, pName, pPrice }) {
  const dispatch = useDispatch();
  const { productThumbnail, productName, productPrice, documentID } = product;
  const [buttonStatus, setButtonStatus] = useState(false);
  const history = useHistory();

  const handleAddToWl = (product) => {
    console.log('test');
    if (!product) return;
    dispatch(addToWL(product));
  };

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
      <Link to={`/product/${documentID}`}>
        <Img src={productThumbnail} alt="" />
      </Link>
      <PriceTagDiv>
        <FavoriteIcon onClick={() => handleAddToWl(product)} />
        {pPrice}€
        <Link to={`/product/${documentID}`}>
          <VisibilityIcon />
        </Link>
      </PriceTagDiv>
    </MainDiv>
  );
}

export default ProductComponent;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const PriceTagDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  margin: 0 auto;
`;
