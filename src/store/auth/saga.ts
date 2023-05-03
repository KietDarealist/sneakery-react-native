import {put, takeLatest, all, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {postSignInAccount} from './actions';
import {authReducerActions} from './slice';
import axios from 'axios';
import {postSignIn} from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* signIn(action: PayloadAction<any>): any {
  yield put(authReducerActions.setIsSignInLoading(true));

  const response = yield call(
    postSignIn,
    action.payload.email,
    action.payload.password,
  );
  if (response?.data?.data) {
    yield put(authReducerActions.setIsSignInLoading(false));
    yield call(
      AsyncStorage.setItem,
      'accessToken',
      response?.data?.data?.token,
    );
  } else {
  }
}

export default function* authSaga(): any {
  yield all([yield takeLatest(postSignInAccount.type, signIn)]);
}
