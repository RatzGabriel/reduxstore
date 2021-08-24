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
    <MainMainDiv dm={dm}>
      <div>
        <MainImg src="./images/cart.jpeg" alt="" />
        <h1>Cart:</h1>
      </div>
      <div>
        {cartItems.length > 0 ? (
          <MainDiv>
            {cartItems.map((item, pos) => {
              return (
                <ItemDiv key={pos}>
                  <Item dm={dm} product={item} text={'cart'} />
                </ItemDiv>
              );
            })}
            <BuyDiv>
              <h1>Total: {(Math.round(total * 100) / 100).toFixed(2)}</h1>
              <StyledLink dm={dm} onClick={() => history.goBack()}>
                Continue Shopping
              </StyledLink>
              <StyledLink dm={dm} onClick={() => history.push('/payment')}>
                Checkout
              </StyledLink>
            </BuyDiv>
          </MainDiv>
        ) : (
          <p>{errMsg}</p>
        )}
      </div>
    </MainMainDiv>
  );
}

export default Checkout;

const MainImg = styled.img`
  width: 100%;
  height: 50vh;
`;

const MainMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  color: ${(props) => (props.dm ? 'white' : 'black')};
`;

const BuyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const MainDiv = styled.div`
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
console.log('test');
console.log('test2');
const StyledLink = styled(Link)`
  color: ${(props) => (props.dm ? 'black' : 'white')};
  background-color: ${(props) => (props.dm ? 'white' : color)};
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  border: none;
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
