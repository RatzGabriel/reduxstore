import { takeLatest, put, all, call } from 'redux-saga/effects';
import productsTypes from './products.types';
import {
  handleAddProduct,
  handleDeleteProduct,
  handleFetchProduct,
  handleFetchProducts,
} from './products.helpers';
import { auth } from '../../firebase/Utils';
import {
  setProducts,
  fetchProductsStart,
  setProduct,
} from './products.actions';

export function* addProduct({ payload }) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (err) {}
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload);

    yield put(setProducts(products));
  } catch (err) {}
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (err) {}
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(setProduct(product));
  } catch (err) {}
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}
