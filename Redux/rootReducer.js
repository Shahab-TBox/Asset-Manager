import {combineReducers} from 'redux';
import authReducer from './authSlice';
import paginationReducer from './paginationSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  pagination: paginationReducer,
});

export default rootReducer;
