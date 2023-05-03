import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  //sign in state
  accessToken: string | null;
  isSignInLoading: boolean;
  error: string | null;

  //reset password state
  currentEmail: string | null;
  isSendOTPLoading: boolean;
  isConfirmOTPLoading: boolean;
  sendOTPError: string | null;
  confirmOTPError: string | null;
  resetPasswordToken: string | null;
  isChangePasswordLoading: boolean;
  changePasswordError: string | null;
}

export const initialState: AuthState = {
  //sign in state
  accessToken: null,
  isSignInLoading: false,
  error: null,

  //reset password state
  sendOTPError: null,
  confirmOTPError: null,
  isSendOTPLoading: false,
  isConfirmOTPLoading: false,
  isChangePasswordLoading: false,
  changePasswordError: null,
  currentEmail: '',
  resetPasswordToken: null,
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState: {...initialState},
  reducers: {
    //login flow
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsSignInLoading: (state, action) => {
      state.isSignInLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    //reset password flow
    setIsSendOTPLoading: (state, action) => {
      state.isSendOTPLoading = action.payload;
    },
    setSendOTPError: (state, action) => {
      state.sendOTPError = action.payload;
    },
    setIsConfirmOTPLoading: (state, action) => {
      state.isConfirmOTPLoading = action.payload;
    },
    setConfirmOTPError: (state, action) => {
      state.confirmOTPError = action.payload;
    },
    setCurrentEmail: (state, action) => {
      state.currentEmail = action.payload;
    },
    setResetPasswordToken: (state, action) => {
      state.resetPasswordToken = action.payload;
    },
    setIsChangePasswordLoading: (state, action) => {
      state.isChangePasswordLoading = action.payload;
    },
    setChangePasswordError: (state, action) => {
      state.changePasswordError = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authReducerKey = authSlice.name;
export const authReducerActions = authSlice.actions;
