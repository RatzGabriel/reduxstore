import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getOrderDetailsStart } from '../../Redux/Orders/orders.actions';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

function Order() {
  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { orderDetails } = useSelector(mapState);
  const { orderID } = useParams();

  const dispatch = useDispatch();

  const { orderTotal } = orderDetails;

  return (
    <div>
      <h1>Order ID:{orderID}</h1>
      <h3>Total:{orderTotal}</h3>
      <OrderDetails order={orderDetails} />
    </div>
  );
}

export default Order;
