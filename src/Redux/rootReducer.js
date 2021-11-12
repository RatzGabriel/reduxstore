import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ordersReducer from './Orders/orders.reducer';
import wlReducer from './WishList/wishlist.reducer';

export const rootreducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
  wlData: wlReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData', 'wlData'],
};

export default persistReducer(configStorage, rootreducer);
