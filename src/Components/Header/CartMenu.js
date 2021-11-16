import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import {
  selectCartItems,
  selectCartTotal,
} from '../../Redux/Cart/cart.selectors';
import { color } from '../../colors';
import CartMenuItem from './CartMenuItem';
import { Link } from 'react-router-dom';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

function CartMenu({ setStatusCart, statusCart, dm }) {
  const { cartItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your cart.';
  return (
    <Nav statusNavBar={statusCart} dm={dm}>
      <DivTitle>
        <H1Title>Cart</H1Title>
        <CloseIcon onClick={() => setStatusCart(false)} />
      </DivTitle>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, pos) => {
            return <CartMenuItem item={item} />;
          })}
        </div>
      ) : (
        <div>{errMsg}</div>
      )}
      <DivButton>
        <DivTotal>
          <H1Title>Total:</H1Title>
          <H1Title>{(Math.round(total * 100) / 100).toFixed(2)}</H1Title>
        </DivTotal>
        <div>
          <Link to="/payment">
            <ButtonCheckout onClick={() => setStatusCart(false)} color={color}>
              Checkout
            </ButtonCheckout>
          </Link>
        </div>
      </DivButton>
    </Nav>
  );
}

export default CartMenu;

const DivTotal = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1em;

  align-items: center;
`;

const ButtonCheckout = styled.button`
  color: ${(props) => props.color};
  padding: 1em;
  width: 10em;
  border: none;
`;

const H1Title = styled.h1`
  color: white;
  font-family: roboto;
  font-size: 24px;
`;

const DivTitle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid white;
  padding: 1em 1em;
`;

const Nav = styled.nav`
  transition: opacity 0.75s, visibility 0.75s, width 0.75s;
  z-index: 999;
  width: ${(props) => (props.statusNavBar ? '80%' : '30%')};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.dm ? 'black' : color)};
  position: fixed;
  opacity: ${(props) => (props.statusNavBar ? '1' : '0')};
  visibility: ${(props) => (props.statusNavBar ? 'visible' : 'hidden')};
  height: ${(props) => (props.statusNavBar ? '100vh' : '100vh')};
  overflow: scroll;

  @media (min-width: 962px) {
    display: none;
  }
`;
