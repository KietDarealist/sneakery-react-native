import {combineReducers} from 'redux';
import {authReducer} from '../auth/slice';
import {productReducer} from '../product/slice';

const rootReducer = combineReducers({
  authReducer,
  productReducer,
});

export default rootReducer;
