import {createAction} from '@reduxjs/toolkit';
import {productReducerKey} from './slice';

export const postSignInAccount = createAction<{
  email: string;
  password: string;
}>(productReducerKey + '/postSignInAccount');
