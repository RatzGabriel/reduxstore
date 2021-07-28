import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { CountryDropdown } from 'react-country-region-selector';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import FormInput from '../Elements/Form/Form';
import Button from '../Elements/Button/Button';
import { apiInstance } from '../../CustomHooks/checkUserIsAdmin';
import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from '../../Redux/Cart/cart.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrderHistory } from '../../Redux/Orders/orders.actions';
import styled from 'styled-components';

const initialAdressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

function PaymentDetails() {
  const dispatch = useDispatch();
  const elements = useElements();
  const stripe = useStripe();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const [billingAdress, setBillingAdress] = useState({ ...initialAdressState });
  const [shippingAdress, setShippingAdress] = useState({
    ...initialAdressState,
  });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
    }
  }, [itemCount]);

  const handleShipping = (evt) => {
    const { name, value } = evt.target;
    setShippingAdress({
      ...shippingAdress,
      [name]: value,
    });
  };

  const handleBilling = (evt) => {
    const { name, value } = evt.target;
    setBillingAdress({
      ...shippingAdress,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const cardElemet = elements.getElement('card');

    if (
      !shippingAdress.line1 ||
      !shippingAdress.city ||
      !shippingAdress.state ||
      !shippingAdress.postal_code ||
      !shippingAdress.country ||
      !billingAdress.line1 ||
      !billingAdress.city ||
      !billingAdress.state ||
      !billingAdress.postal_code ||
      !billingAdress.country ||
      !recipientName ||
      !nameOnCard
    ) {
      return;
    }

    apiInstance
      .post('/payments/create', {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAdress,
          },
        },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: 'card',
            card: cardElemet,
            billing_details: {
              name: nameOnCard,
              address: {
                ...billingAdress,
              },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(({ paymentIntent }) => {
                const configOrder = {
                  orderTotal: total,
                  orderItems: cartItems.map((item) => {
                    const {
                      documentID,
                      productThumbnail,
                      productName,
                      productPrice,
                      quantity,
                    } = item;

                    return {
                      documentID,
                      productThumbnail,
                      productName,
                      productPrice,
                      quantity,
                    };
                  }),
                };
                dispatch(saveOrderHistory(configOrder));
              });
          });
      });
  };

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px',
      },
    },
    hidePostalCode: true,
  };

  return (
    <MainDiv>
      <form onSubmit={handleFormSubmit} action="">
        <div>
          <h2>Shipping Address</h2>

          <FormInput
            required
            type="text"
            placeholder="Recipient Name"
            value={recipientName}
            name="recipientName"
            onChange={(e) => setRecipientName(e.target.value)}
          />
          <FormInput
            type="text"
            required
            placeholder="Line 1"
            value={shippingAdress.line1}
            name="line1"
            onChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            type="text"
            placeholder="Line 2"
            value={shippingAdress.line2}
            name="line2"
            onChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            type="text"
            required
            placeholder="City"
            value={shippingAdress.city}
            name="city"
            onChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            type="text"
            required
            placeholder="State"
            value={shippingAdress.state}
            name="state"
            onChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            type="text"
            required
            placeholder="Postal Code"
            value={shippingAdress.postal_code}
            name="postal_code"
            onChange={(evt) => handleShipping(evt)}
          />
          <CountryDropdown
            required
            valueType="short"
            value={shippingAdress.country}
            onChange={(val) =>
              handleShipping({
                target: {
                  name: 'country',
                  value: val,
                },
              })
            }
          />
        </div>
        <div>
          <h2>Billing Address</h2>
          <FormInput
            type="text"
            required
            placeholder="Name on Card"
            value={nameOnCard}
            name="nameOnCard"
            onChange={(e) => setNameOnCard(e.target.value)}
          />
          <FormInput
            type="text"
            required
            placeholder="Line 1"
            value={billingAdress.line1}
            name="line1"
            onChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            type="text"
            placeholder="Line 2"
            value={billingAdress.line2}
            name="line2"
            onChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            type="text"
            required
            placeholder="City"
            value={billingAdress.city}
            onChange={(evt) => handleBilling(evt)}
            name="city"
          />
          <FormInput
            type="text"
            required
            placeholder="State"
            value={billingAdress.state}
            onChange={(evt) => handleBilling(evt)}
            name="state"
          />
          <FormInput
            type="text"
            required
            placeholder="Postal Code"
            value={billingAdress.postal_code}
            onChange={(evt) => handleBilling(evt)}
            name="postal_code"
          />
          <CountryDropdown
            valueType="short"
            required
            value={billingAdress.country}
            onChange={(val) =>
              handleBilling({
                target: {
                  name: 'country',
                  value: val,
                },
              })
            }
          />
        </div>
        <CardDetailsDiv>
          {total} Euro
          <h2>Card Details</h2>
          <CardElementDiv>
            <CardElement options={configCardElement} />
          </CardElementDiv>
        </CardDetailsDiv>
        <Button type="submit">Pay Now</Button>
      </form>
    </MainDiv>
  );
}

export default PaymentDetails;

const CardElementDiv = styled.div`
  border: 1px solid black;
`;

const MainDiv = styled.div`
  padding: 13em 0em;
  width: 100%;
`;

const CardDetailsDiv = styled.div`
  padding: 1em;
  margin: 1em;
`;
