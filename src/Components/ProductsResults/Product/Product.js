import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Cart/cart.action';
import styled from 'styled-components';
import Rosa from 'react-on-scroll-animation';
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
    <NewMainDiv>
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
          <NewTestDiv>
            <TestDiv top="25%">
              <Rosa
                animation="fade-down"
                duration={800}
                anchorPlacement={'top-center'}
                offset={1200}
              >
                <ButtonElement
                  content="Add to Cart"
                  type="button"
                  vis={buttonStatus}
                  onClick={() => handleAddToCard(product)}
                >
                  <span> {productPrice} € </span>
                </ButtonElement>
              </Rosa>
            </TestDiv>
            <TestDiv top="70%">
              <Rosa
                animation="fade-down"
                duration={800}
                anchorPlacement={'top-center'}
                offset={1200}
              >
                <ButtonElement
                  content="Add to WishList"
                  type="button"
                  vis={buttonStatus}
                  onClick={() => handleAddToCard(product)}
                >
                  <span>
                    <FavoriteIcon></FavoriteIcon>
                  </span>
                </ButtonElement>
              </Rosa>
            </TestDiv>
          </NewTestDiv>
        )}
      </StyledLink>

      <StyledLinkTwo
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
      </StyledLinkTwo>
    </NewMainDiv>
  );
}

export default Product;

const NewTestDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NewMainDiv = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  padding: 1em 0;
  @media (max-width: 962px) {
    width: 50%;
  }
`;

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
  color: white;
  @media (max-width: 962px) {
  }
`;

const TestDiv = styled.div`
  top: ${(props) => props.top};
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
  width: 80%;
  cursor: pointer;
  align-items: center;
  height: ${(props) => props.height || '100%'};
  padding: 1em;
  padding-top: ${(props) => props.padding || '1em'};
  padding-bottom: ${(props) => props.pb || '1em'};
  margin-top: ${(props) => props.margin || '1em'};
  flex-direction: column;
  @media (max-width: 962px) {
    display: none;
    text-align: center;
    align-items: center;
    padding: 1em;
    margin: 1em;
    position: sticky;
    text-decoration: none;
    padding: 0em 0em 0em 0em;
    margin: 0em auto;
    width: 50%;
  }
`;

const StyledLinkTwo = styled(Link)`
  display: none;
  @media (max-width: 962px) {
    display: flex;
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
    content: '${(props) => props.content}';
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
