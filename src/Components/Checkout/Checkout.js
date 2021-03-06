import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartTotal,
} from '../../Redux/Cart/cart.selectors';

import { color } from '../../colors';
import Item from './Item/Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

function Checkout({ dm }) {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your cart.';
  return (
    <DivMain dm={dm} color={color}>
      <div>
        <DivBanner color={color}>
          <H1BannerText>Cart</H1BannerText>
        </DivBanner>
      </div>
      <div>
        {cartItems.length > 0 ? (
          <DivItems>
            {cartItems.map((item, pos) => {
              return (
                <ItemDiv key={pos}>
                  <Item dm={dm} product={item} text={'cart'} />
                </ItemDiv>
              );
            })}
            <DivBuy>
              <h1>Total: {(Math.round(total * 100) / 100).toFixed(2)}</h1>
              <StyledLink
                color={color}
                dm={dm}
                onClick={() => history.goBack()}
              >
                Continue Shopping
              </StyledLink>
              <StyledLink dm={dm} onClick={() => history.push('/payment')}>
                Checkout
              </StyledLink>
            </DivBuy>
          </DivItems>
        ) : (
          <p>{errMsg}</p>
        )}
      </div>
    </DivMain>
  );
}

export default Checkout;

const H1BannerText = styled.h1`
  color: white;
  font-size: 3em;
  margin-left: 1em;
`;

const DivBanner = styled.div`
  background-color: ${(props) => props.color};
  height: 10vh;
  display: flex;
  align-items: center;
`;

const ImgMain = styled.img`
  width: 100%;
  height: 50vh;
`;

const DivMain = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => (props.dm ? 'black' : props.color)};
  color: ${(props) => (props.dm ? 'white' : 'black')};
  @media (min-width: 962px) {
    min-height: 100vh;
  }
`;

const DivBuy = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
`;

const DivItems = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 962px) {
    width: 100%;
  }
`;

const ItemDiv = styled.div`
  height: 8vh;
  margin: 1em 0em;
  display: flex;
  background-color: gray;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const StyledLink = styled(Link)`
  color: ${(props) => (props.dm ? 'black' : props.color)};
  background-color: ${(props) => (props.dm ? 'white' : 'white')};
  border: 1px solid white;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin: 1em 0em;
  padding: 1em;
  width: 13em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
