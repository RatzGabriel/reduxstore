import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addToWL } from '../../../Redux/WishList/wishlist.action';
import styled from 'styled-components';
import {
  selectWlItems,
  selectWlTotal,
} from '../../../Redux/WishList/wishlist.selectors';
import { removeWlItem } from '../../../Redux/WishList/wishlist.action';

import VisibilityIcon from '@material-ui/icons/Visibility';

import './ProductComponent.css';

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function ProductComponent({ product, pPrice }) {
  const dispatch = useDispatch();
  const { wlItems } = useSelector(mapState);
  const [wobble, setWobble] = useState('off');
  const [heartStatus, setHeartStatus] = useState('/images/favorite.png');

  const { productThumbnail, productName, productPrice, documentID } = product;

  useEffect(() => {
    if (wlItems.length > 0) {
      wlItems.map((item) => {
        if (item.documentID === documentID) {
          console.log('yes');
          setHeartStatus('/images/redheart.svg');
        }
      });
    } else {
      setHeartStatus('/images/favorite.png');
    }
  }, []);

  const handleRemoveWlItem = (documentID) => {
    dispatch(removeWlItem(documentID));
  };

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

  const isItemInWl = (product) => {
    if (wlItems.length > 0) {
      for (let i = 0; i < wlItems.length; i++) {
        if (wlItems[i].documentID === product.documentID) {
          console.log('yes it isss');
          handleRemoveWlItem(product.documentID);
          setHeartStatus('/images/favorite.png');
          return;
        } else {
          handleAddToWl(product);
          setHeartStatus('/images/redheart.svg');
        }
      }
    }
    if (wlItems.length === 0) {
      console.log('no it isssnt else');
      handleAddToWl(product);
      setHeartStatus('/images/redheart.svg');
    }
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
            src={heartStatus}
            alt="favorite"
            onClick={() => {
              setWobble('on');
              isItemInWl(product);
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
