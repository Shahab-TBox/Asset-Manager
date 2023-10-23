import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  latitude: 31.5204,
  longitude: 74.3587,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCurrentRegion: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    zoomIn: state => {
      state.latitudeDelta = Math.max(
        0.0001,
        state.latitudeDelta - 0.5 * state.latitudeDelta,
      );
      state.longitudeDelta = Math.max(
        0.0001,
        state.longitudeDelta - 0.5 * state.longitudeDelta,
      );
    },
    setCurrentZoomLevel: (state, action) => {
      state.latitudeDelta = action.payload.latitudeDelta;
      state.longitudeDelta = action.payload.longitudeDelta;
    },
    zoomOut: state => {
      state.latitudeDelta = Math.min(
        30,
        state.latitudeDelta + 0.5 * state.latitudeDelta,
      );
      state.longitudeDelta = Math.min(
        30,
        state.longitudeDelta + 0.5 * state.longitudeDelta,
      );
    },
  },
});
export const {setCurrentRegion, zoomIn, zoomOut, setCurrentZoomLevel} =
  mapSlice.actions;
export default mapSlice.reducer;
