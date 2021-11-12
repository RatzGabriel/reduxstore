import React from 'react';
import PaymentDetails from '../../Components/PaymentDetails/PaymentDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from '../../stripe/config';

const stripePromise = loadStripe(publishableKey);

function Payment({ dm }) {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentDetails dm={dm} />
      </Elements>
    </div>
  );
}

export default Payment;
