import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Button';
import Item from './Item/Item';
import {
  selectCartItems,
  selectCartTotal,
} from '../../Redux/Cart/cart.selectors';

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
      <HeadingDiv>
        <h1>Checkout</h1>
      </HeadingDiv>
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

const HeadingDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 1em 0em 0em 0em;
`;

const MainMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyDiv = styled.div`
  padding: 2em;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  height: 10vh;
  padding: 1em;
  margin: 1em;
  width: 90%;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  width: 8rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-bottom: 3em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
