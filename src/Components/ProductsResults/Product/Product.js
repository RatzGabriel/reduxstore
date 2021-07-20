import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/cart.action';
import styled from 'styled-components';
import Rosa from 'react-on-scroll-animation';
import VisibilityIcon from '@material-ui/icons/Visibility';

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

      {buttonStatus && (
        <TestDiv>
          <Rosa
            animation="fade-down"
            duration={300}
            anchorPlacement={'top-center'}
            offset={1200}
          >
            <ButtonElement
              eye={<VisibilityIcon></VisibilityIcon>}
              type="button"
              vis={buttonStatus}
              onClick={() => handleAddToCard(product)}
            >
              <span> {productPrice} €</span>
            </ButtonElement>
          </Rosa>
        </TestDiv>
      )}
    </StyledLink>
  );
}

export default Product;

const TestDiv = styled.div`
  top: 50%;
  cursor: pointer;
  position: absolute;
  @media only screen and (max-width: 1100px) {
    display: inline-block;
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height || '100%'};
  align-items: flex-start;
  padding: 1em;
  padding-top: ${(props) => props.padding || '1em'};
  padding-bottom: ${(props) => props.pb || '0em'};
  margin-top: ${(props) => props.margin || '1em'};

  @media (max-width: 1100px) {
    display: block;
    width: ${(props) => props.wd || '100%'};
  }
`;

const ButtonElement = styled.button`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding: 1em 3em;
  border-radius: 35px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover span {
    display: none;
  }
  &:hover:before {
    content: '${'Shop it'}';
  }
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
  display: flex;
  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;
