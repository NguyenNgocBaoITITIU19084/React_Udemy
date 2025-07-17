import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isVisibleCart: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
