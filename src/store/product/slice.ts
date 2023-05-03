import {createSlice} from '@reduxjs/toolkit';

export interface ProductState {
  //sign in state
  nikeProducts: IProduct[];
  adidasProducts: IProduct[];
  lvProducts: IProduct[];
  pumaProducts: IProduct[];
}

export const initialState: ProductState = {
  //sign in state
  nikeProducts: [],
  adidasProducts: [],
  lvProducts: [],
  pumaProducts: [],
};

export const productSlice = createSlice({
  name: 'authReducer',
  initialState: {...initialState},
  reducers: {
    //login flow
    setNikeProducts: (state, action) => {
      state.nikeProducts = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productReducerKey = productSlice.name;
export const productReducerActions = productSlice.actions;
