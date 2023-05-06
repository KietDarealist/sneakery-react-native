import {createSlice} from '@reduxjs/toolkit';

export interface ProductState {
  //sign in state
  nikeProducts: IProduct[];
  adidasProducts: IProduct[];
  lvProducts: IProduct[];
  pumaProducts: IProduct[];

  isGettingHomePage: boolean;
}

export const initialState: ProductState = {
  //sign in state
  nikeProducts: [],
  adidasProducts: [],
  lvProducts: [],
  pumaProducts: [],
  isGettingHomePage: false,
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: {...initialState},
  reducers: {
    setNikeProducts: (state, action) => {
      state.nikeProducts = action.payload;
    },
    setAdidasProducts: (state, action) => {
      state.adidasProducts = action.payload;
    },
    setPumaProducts: (state, action) => {
      state.pumaProducts = action.payload;
    },
    setLVProducts: (state, action) => {
      state.lvProducts = action.payload;
    },
    setIsGettingHomePage: (state, action) => {
      state.isGettingHomePage = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productReducerKey = productSlice.name;
export const productReducerActions = productSlice.actions;
