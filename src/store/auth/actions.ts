import {createAction} from '@reduxjs/toolkit';
import {authReducerKey} from './slice';

export const postSignInAccount = createAction<{
  email: string;
  password: string;
}>(authReducerKey + '/postSignInAccount');
