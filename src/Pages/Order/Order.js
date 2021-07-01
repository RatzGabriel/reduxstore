import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getOrderDetailsStart } from '../../Redux/Orders/orders.actions';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

function Order() {
  const { orderDetails } = useSelector(mapState);
  const { orderID } = useParams();

  const dispatch = useDispatch();

  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
    console.log(orderTotal);
  }, []);

  return (
    <div>
      <h1>Order ID:{orderID}</h1>
      <h3>Total:{orderTotal}</h3>
      <OrderDetails order={orderDetails} />
    </div>
  );
}

export default Order;
