import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isVisibleCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
