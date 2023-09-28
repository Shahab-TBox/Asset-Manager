import {combineReducers} from 'redux';
import authReducer from './authSlice';
import paginationReducer from './paginationSlice';
import albumReducer from './albumSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  pagination: paginationReducer,
  album: albumReducer,
});

export default rootReducer;
