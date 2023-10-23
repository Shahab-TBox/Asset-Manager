import {combineReducers} from 'redux';
import authReducer from './authSlice';
import paginationReducer from './paginationSlice';
import albumReducer from './albumSlice';
import mapReducer from './mapSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  pagination: paginationReducer,
  album: albumReducer,
  map: mapReducer,
});

export default rootReducer;
