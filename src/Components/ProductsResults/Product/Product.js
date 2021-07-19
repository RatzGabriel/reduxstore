import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/cart.action';
import styled from 'styled-components';

function Product({ product, pt, pb, wd, height }) {
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
    <StyledLink
      height={height}
      paddin={pt}
      margin={pt}
      pb={pb}
      wd={wd}
      to={`/product/${documentID}`}
      onMouseEnter={() => {
        setButtonStatus(true);
      }}
      onMouseLeave={() => {
        setButtonStatus(false);
      }}
    >
      <Img src={productThumbnail}></Img>

      <ButtonElement
        type="button"
        vis={buttonStatus}
        onClick={() => handleAddToCard(product)}
      >
        {productPrice} €
        <br />
        Shop Item
      </ButtonElement>
    </StyledLink>
  );
}

export default Product;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height || '100%'};
  align-items: flex-start;
  padding: 1em;
  padding-top: ${(props) => props.padding || '1em'};
  padding-bottom: ${(props) => props.pb || '0em'};
  margin-top: ${(props) => props.margin || '1em'};
  transition: top 2s ease 0s;

  @media (max-width: 1100px) {
    display: block;
    width: ${(props) => props.wd || '100%'};
  }
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  z-index: ${(props) => (props.vis ? '99' : '-999')};
  visibility: ${(props) => (props.vis ? 'visible' : 'hidden')};
  top: ${(props) => (props.vis ? '50%' : '48%')};
  padding: 3% 1em;
  border-radius: 35px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  position: absolute;
  transition: top 0.6s;
  &:hover {
    background-color: black;
  }

  @media only screen and (max-width: 1100px) {
    display: inline-block;
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;
