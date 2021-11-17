import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { CountryDropdown } from 'react-country-region-selector';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import FormInput from '../Elements/Form/Form';
import { apiInstance } from '../../CustomHooks/checkUserIsAdmin';
import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from '../../Redux/Cart/cart.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrderHistory } from '../../Redux/Orders/orders.actions';
import styled from 'styled-components';
import { color } from '../../colors';
import './PaymentDetails.css';

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

function PaymentDetails({ dm }) {
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
  const [paymentSuccess, setPaymentSuccess] = useState(true);

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

    const cardElement = elements.getElement('card');

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
            card: cardElement,
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
                setPaymentSuccess(true);
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
    <MainDiv dm={dm}>
      <DivBanner color={color}>
        <H1Banner>Total:</H1Banner>
        <H1Banner>{total.toFixed(2)} €</H1Banner>
      </DivBanner>
      <DivInner>
        <form onSubmit={handleFormSubmit} action="">
          <div>
            <H2Title dm={dm} color={color}>
              Shipping Address
            </H2Title>

            <FormInput
              label="Recipient Name"
              required
              type="text"
              value={recipientName}
              name="recipientName"
              onChange={(e) => setRecipientName(e.target.value)}
            />
            <FormInput
              type="text"
              required
              label="Line 1"
              value={shippingAdress.line1}
              name="line1"
              onChange={(evt) => handleShipping(evt)}
            />
            <FormInput
              type="text"
              label="Line 2"
              value={shippingAdress.line2}
              name="line2"
              onChange={(evt) => handleShipping(evt)}
            />
            <FormInput
              type="text"
              required
              label="City"
              value={shippingAdress.city}
              name="city"
              onChange={(evt) => handleShipping(evt)}
            />
            <FormInput
              type="text"
              required
              label="State"
              value={shippingAdress.state}
              name="state"
              onChange={(evt) => handleShipping(evt)}
            />
            <FormInput
              type="text"
              required
              label="Postal Code"
              value={shippingAdress.postal_code}
              name="postal_code"
              onChange={(evt) => handleShipping(evt)}
            />
            <CountryDropdown
              classes="dropdown"
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
            <H2Title dm={dm} color={color}>
              Billing Address
            </H2Title>
            <FormInput
              type="text"
              required
              label="Name on Card"
              value={nameOnCard}
              name="nameOnCard"
              onChange={(e) => setNameOnCard(e.target.value)}
            />
            <FormInput
              type="text"
              required
              label="Line 1"
              value={billingAdress.line1}
              name="line1"
              onChange={(evt) => handleBilling(evt)}
            />
            <FormInput
              type="text"
              label="Line 2"
              value={billingAdress.line2}
              name="line2"
              onChange={(evt) => handleBilling(evt)}
            />
            <FormInput
              type="text"
              required
              label="City"
              value={billingAdress.city}
              onChange={(evt) => handleBilling(evt)}
              name="city"
            />
            <FormInput
              type="text"
              required
              label="State"
              value={billingAdress.state}
              onChange={(evt) => handleBilling(evt)}
              name="state"
            />
            <FormInput
              type="text"
              required
              label="Postal Code"
              value={billingAdress.postal_code}
              onChange={(evt) => handleBilling(evt)}
              name="postal_code"
            />

            <CountryDropdown
              classes="dropdown"
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
          <CardDetailsDiv dm={dm} color={color}>
            {total.toFixed(2)} Euro
            <H2Title dm={dm}>Card Details</H2Title>
            <CardElementDiv>
              <CardElement options={configCardElement} />
            </CardElementDiv>
          </CardDetailsDiv>
          <ButtonPay color={color} type="submit">
            Pay Now with Card
          </ButtonPay>
          <DivPay>
            <DivSmallWrapp>
              <DivSmall />
            </DivSmallWrapp>
            <div>
              <P>Or pay with Google Pay</P>
            </div>
            <DivSmallWrapp>
              <DivSmall />
            </DivSmallWrapp>
          </DivPay>
          <ButtonGooglePay color={color}>
            <ImgGoogleLogo src="/images/gpay.png" alt="test" />
          </ButtonGooglePay>
        </form>
        {paymentSuccess ? <DivPaymentSuccess></DivPaymentSuccess> : null}
      </DivInner>
    </MainDiv>
  );
}

export default PaymentDetails;

const H2Title = styled.h2`
  color: ${(props) => (props.dm ? 'white' : props.color)};
`;

const ImgGoogleLogo = styled.img`
  height: 1em;
`;

const DivPaymentSuccess = styled.div`
  height: 40vh;
`;

const ButtonGooglePay = styled.button`
  width: 100%;
  background-color: ${(props) => props.color};
  color: 'white';
  padding: 1em 0em;
  border: none;
  margin: 1em 0;
`;

const P = styled.p`
  color: #8792a2;
  padding: 0em 0.5em;
`;

const DivPay = styled.div`
  display: flex;
  margin: 2em 0em;
`;

const DivSmallWrapp = styled.div`
  width: 20%;
`;

const DivSmall = styled.div`
  height: 50%;
  border-bottom: 1px solid #8792a2;
`;

const ButtonPay = styled.button`
  width: 100%;
  background-color: ${(props) => props.color};
  color: white;
  padding: 1em 0em;
  border: none;
`;

const DivInner = styled.div`
  margin: 1em 1em;
`;

const H1Banner = styled.h1`
  color: white;
  font-size: 1.9rem;
`;

const DivBanner = styled.div`
  height: 15vh;
  padding-top: 4em;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const CardElementDiv = styled.div`
  border: 1px solid black;
  padding: 0.5em;
  margin: 1em 0;
  border: 0.669444px solid rgba(60, 66, 87, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 1.33889px 3.34722px rgba(0, 0, 0, 0.08),
    0px 0.669444px 0.669444px rgba(0, 0, 0, 0.04);
  border-radius: 5.35556px;
`;

const MainDiv = styled.div`
  width: 100%;
  background-color: ${(props) => (props.dm ? 'black' : 'white')};
  margin-top: 1em;
`;

const CardDetailsDiv = styled.div`
  margin: 1em 0;
  color: ${(props) => (props.dm ? 'white' : props.color)};
`;
