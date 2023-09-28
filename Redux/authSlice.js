import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: 'false',
  username: 'Shahab',
  password: '1234',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = 'true';
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: state => {
      state.isAuthenticated = 'false';
      state.username = '';
      state.password = '';
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
