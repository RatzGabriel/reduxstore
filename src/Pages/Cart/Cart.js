import React from 'react';
import Checkout from '../../Components/Checkout/Checkout';

function Cart({ dm }) {
  return (
    <div>
      <h1>
        <Checkout dm={dm} />
      </h1>
    </div>
  );
}

export default Cart;
