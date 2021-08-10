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
import { color } from '../../../colors';

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function ProductComponent({ product, pPrice }) {
  const dispatch = useDispatch();
  const { wlItems } = useSelector(mapState);
  const [wobble, setWobble] = useState('off');
  const [heartStatus, setHeartStatus] = useState('/images/heart.svg');

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
      setHeartStatus('/images/heart.svg');
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
          handleRemoveWlItem(product.documentID);
          setHeartStatus('/images/heart.svg');
          return;
        } else {
          handleAddToWl(product);
          setHeartStatus('/images/redheart.svg');
        }
      }
    }
    if (wlItems.length === 0) {
      handleAddToWl(product);
      setHeartStatus('/images/redheart.svg');
    }
  };

  return (
    <MainDiv bg={productThumbnail}>
      <InnerDiv>
        <Img
          class={wobble}
          src={heartStatus}
          alt="favorite"
          onClick={() => {
            setWobble('on');
            isItemInWl(product);
            timeout();
          }}
        />
        <PDiv>
          <P>{pPrice}$</P>
        </PDiv>
        <FavLinkTwo to={`/product/${documentID}`}>
          <VisibilityIcon />
        </FavLinkTwo>
      </InnerDiv>
    </MainDiv>
  );
}

export default ProductComponent;

const PDiv = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: underline;
`;

const InnerDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 20%;
  bottom: 0%;
  color: black;
  font-weight: 600;
`;

const P = styled.p`
  margin: 0;
`;

const FavLinkTwo = styled(Link)`
  color: ${color};
`;

const Img = styled.img`
  height: 1em;
  width: 1em;
  border-radius: 20%;
  z-index: 888;
  @media (max-width: 962px) {
  }
`;

const MainDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
`;
