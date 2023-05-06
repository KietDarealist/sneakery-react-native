import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {getProductDetail, getProductHomePages} from '../store/product/actions';

const useProduct = () => {
  const dispatch = useDispatch();
  const {
    nikeProducts,
    adidasProducts,
    pumaProducts,
    lvProducts,
    isGettingHomePage,
  } = useSelector((state: RootState) => state?.productReducer);

  const dispatchGetProductHomePage = () => {
    dispatch(getProductHomePages());
  };

  const dispatchGetProductDetail = (id: string) => {
    dispatch(getProductDetail({id: id}));
  };

  return {
    dispatchGetProductHomePage,
    nikeProducts,
    adidasProducts,
    pumaProducts,
    lvProducts,
    isGettingHomePage,
    dispatchGetProductDetail,
  };
};

export default useProduct;
