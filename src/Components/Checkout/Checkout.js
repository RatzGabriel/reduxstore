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

import Item from './Item/Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

function Checkout() {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your cart.';
  return (
    <MainMainDiv>
      <div>
        <img src="./images/cart.jpeg" alt="" />
      </div>
      <div>
        {cartItems.length > 0 ? (
          <MainDiv>
            {cartItems.map((item, pos) => {
              return (
                <ItemDiv key={pos}>
                  <Item {...item} />
                </ItemDiv>
              );
            })}
            <BuyDiv>
              <h3>Total: £{total}</h3>
              <StyledLink onClick={() => history.goBack()}>
                Continue Shopping
              </StyledLink>
              <StyledLink onClick={() => history.push('/payment')}>
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

const MainMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin: 1em 0em;
  padding: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
