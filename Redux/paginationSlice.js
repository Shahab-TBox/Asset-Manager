import {createSlice} from '@reduxjs/toolkit';
const initialState = {data: [], length: 0, currentPage: 1, itemsPerPage: 10};
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    savePosts: (state, action) => {
      state.data = action.payload.data;
      state.length = action.payload.length;
    },
    nextPage: state => {
      state.currentPage = state.currentPage + 1;
    },
    prevPage: state => {
      state.currentPage = Math.max(state.currentPage - 1, 1);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
  },
});
export const {savePosts, nextPage, prevPage, changeItemsPerPage, setPage} =
  paginationSlice.actions;
export default paginationSlice.reducer;
