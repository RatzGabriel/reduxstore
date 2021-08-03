import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToWL } from '../../../Redux/WishList/wishlist.action';
import styled from 'styled-components';

import VisibilityIcon from '@material-ui/icons/Visibility';

import './ProductComponent.css';

function ProductComponent({ product, pPrice }) {
  const dispatch = useDispatch();
  const [wobble, setWobble] = useState('off');

  const { productThumbnail, productName, productPrice, documentID } = product;

  const handleAddToWl = (product) => {
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

  const timeout = () => {
    setTimeout(function () {
      setWobble('off');
    }, 3000);
  };

  return (
    <MainDiv>
      <Link to={`/product/${documentID}`}>
        <Img src={productThumbnail} alt="" />
      </Link>
      <PriceTagDiv>
        <FavDiv>
          <img
            class={wobble}
            src={'/images/favorite.png'}
            alt="favorite"
            onClick={() => {
              handleAddToWl(product);
              setWobble('on');
              timeout();
            }}
          />
        </FavDiv>
        {pPrice}€
        <Link to={`/product/${documentID}`}>
          <VisibilityIcon />
        </Link>
      </PriceTagDiv>
    </MainDiv>
  );
}

export default ProductComponent;

const FavDiv = styled.div`
  padding-left: 0.3em;
`;

const Img = styled.img`
  height: 23em;
  width: 23em;

  @media (max-width: 962px) {
    width: 100%;
    height: 100%;
  }
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
