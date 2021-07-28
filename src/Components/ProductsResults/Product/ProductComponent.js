import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToWL } from '../../../Redux/WishList/wishlist.action';
import styled from 'styled-components';

import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ProductComponent({ product, pPrice }) {
  const dispatch = useDispatch();

  const { productThumbnail, productName, productPrice, documentID } = product;

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
