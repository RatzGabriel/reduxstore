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

function Product({ product, pt, pb, wd, height, pPrice }) {
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

  const handleAddToWl = (product) => {
    if (!product) return;
    dispatch(addToWL(product));
  };

  return (
    <div>
      {buttonStatus && (
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

          <TestDiv>
            <Rosa
              animation="fade-down"
              duration={800}
              anchorPlacement={'top-center'}
              offset={1200}
            >
              <ButtonElement
                eye={<VisibilityIcon></VisibilityIcon>}
                type="button"
                vis={buttonStatus}
                onClick={() => handleAddToCard(product)}
              >
                <span> {productPrice} € </span>
              </ButtonElement>
            </Rosa>
          </TestDiv>
        </StyledLink>
      )}
      <StyledLink
        mobile={'flex'}
        to={`/product/${documentID}`}
        onMouseEnter={() => {
          setButtonStatus(true);
        }}
        onMouseLeave={() => {
          setButtonStatus(false);
        }}
      >
        <PositionDiv>
          <Img src={productThumbnail}></Img>
        </PositionDiv>
        <TestDivText>
          <ButtonElementMobile
            type="button"
            vis={buttonStatus}
            onClick={() => handleAddToWl(product)}
          >
            <span>
              <FavoriteIcon />
            </span>
          </ButtonElementMobile>

          <P>{pPrice || productPrice} Euro</P>

          <ButtonElementMobile
            type="button"
            vis={buttonStatus}
            onClick={() => handleAddToCard(product)}
          >
            <span>
              <ShoppingCartIcon />
            </span>
          </ButtonElementMobile>
        </TestDivText>
      </StyledLink>
    </div>
  );
}

export default Product;

const P = styled.p`
  margin: 1em;
`;

const PositionDiv = styled.div``;

const ButtonElementMobile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TestDivText = styled.div`
  display: flex;
  background-color: brown;
  align-items: center;
  justify-content: space-around;
  width: 92%;
  margin-top: 3em;
  color: white;
`;

const TestDiv = styled.div`
  top: 50%;
  cursor: pointer;
  position: absolute;
  @media only screen and (max-width: 1100px) {
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

  @media (max-width: 962px) {
    display: ${(props) => props.mobile || 'none'};
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1em;
    margin: 1em;
    position: sticky;
    text-decoration: none;
    padding: 0em 0em 0em 0em;
    margin: 0em auto;
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
    padding: 0em 1em 0em 1em;
    margin-top: 3em;
  }
`;
