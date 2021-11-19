import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserOrderHistory } from '../../Redux/Orders/orders.actions';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data,
});

function Dashboard(props) {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {currentUser && (
        <div>
          <h1>Order History</h1>
          <OrderHistory orders={orderHistory} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
