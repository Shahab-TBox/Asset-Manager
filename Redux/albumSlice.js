import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  data: [],
  currentPage: 0,
  itemsPerPage: 10,
};
const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    saveAlbums: (state, action) => {
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
export const {saveAlbums, setPage, prevPage, nextPage, changeItemsPerPage} =
  albumSlice.actions;
export default albumSlice.reducer;
