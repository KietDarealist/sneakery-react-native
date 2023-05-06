import {takeLatest, all, put, call, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {getProductHomePages, getProductDetail} from './actions';
import {
  getAdidasProductsService,
  getLVProductsService,
  getNikeProductsService,
  getProductDetailService,
  getPumaProductsService,
} from './services';
import {productReducerActions} from './slice';

function* getProductsHomePageFromAPI(action: PayloadAction<any>): any {
  yield put(productReducerActions.setIsGettingHomePage(true));

  const [nikeResponse, adidasResponse, pumaResponse, lvResponse] = yield all([
    call(getNikeProductsService),
    call(getAdidasProductsService),
    call(getPumaProductsService),
    call(getLVProductsService),
  ]);

  if (nikeResponse?.data) {
    yield put(
      productReducerActions.setNikeProducts(nikeResponse?.data?.data?.products),
    );
  }

  if (adidasResponse?.data) {
    yield put(
      productReducerActions.setAdidasProducts(
        adidasResponse?.data?.data?.products,
      ),
    );
  }

  if (pumaResponse?.data) {
    yield put(
      productReducerActions.setPumaProducts(pumaResponse?.data?.data?.products),
    );
  }

  if (lvResponse?.data) {
    yield put(
      productReducerActions.setLVProducts(lvResponse?.data?.data?.products),
    );
  }

  yield put(productReducerActions.setIsGettingHomePage(false));
}

function* getProductDetailFromAPI(action: PayloadAction<any>): any {
  yield put(productReducerActions.setIsGettingHomePage(true));

  const response = yield call(getProductDetailService, action.payload.id);

  if (response?.data?.data) {
    yield put(productReducerActions.setIsGettingHomePage(false));
  } else {
    yield put(productReducerActions.setIsGettingHomePage(false));
  }
}

export default function* productSaga(): any {
  yield all([
    yield takeEvery(getProductHomePages, getProductsHomePageFromAPI),
    yield takeEvery(getProductDetail, getProductDetailFromAPI),
  ]);
}
