import { takeLatest, put, all, call } from 'redux-saga/effects';
import productsTypes from './products.types';
import { handleAddProduct, handleFetchProducts } from './products.helpers';
import { auth } from '../../firebase/Utils';
import { setProducts } from './products.actions';

export function* addProduct({
  payload: { productCategory, productName, productThumbnail, productPrice },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (err) {
    // console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductsStart)]);
}
