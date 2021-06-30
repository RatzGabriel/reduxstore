import ordersTypes from './orders.types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  handleSaveOrder,
  handleGetUserOrderHistory,
  handleGetOrder,
} from './orders.helpers';
import { auth } from '../../firebase/Utils';
import { clearCart } from '../Cart/cart.action';
import { setOrderDetails, setUserOrderHistory } from '../Orders/orders.actions';

export function* getUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetUserOrderHistory(payload);
    yield put(setUserOrderHistory(history));
  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserHistoryStart() {
  yield takeLatest(
    ordersTypes.GET_USER_ORDER_HISTORY_START,
    getUserOrderHistory
  );
}

export function* saveOrder({ payload }) {
  try {
    const timestamps = new Date();

    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      orderCreatedDate: timestamps,
    });

    yield put(clearCart());
  } catch (err) {
    // console.log('err', err);
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getOrderDetails({ payload }) {
  try {
    const order = yield handleGetOrder(payload);
    console.log('order back', order);
    yield put(setOrderDetails(order));
  } catch (err) {
    // console.log(err);
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserHistoryStart),
    call(onGetOrderDetailsStart),
  ]);
}
