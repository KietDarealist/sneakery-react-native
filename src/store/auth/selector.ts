import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '..';

import {initialState} from './slice';

const selectAuth = (state: RootState) => state.authReducer || initialState;

export const getAccessToken = createSelector(
  [selectAuth],
  state => state.accessToken,
);

export const getIsSignInLoading = createSelector(
  [selectAuth],
  state => state.isSignInLoading,
);

export const getErrorLogin = createSelector([selectAuth], state => state.error);

export const getErrorSendOTP = createSelector(
  [selectAuth],
  state => state.sendOTPError,
);
