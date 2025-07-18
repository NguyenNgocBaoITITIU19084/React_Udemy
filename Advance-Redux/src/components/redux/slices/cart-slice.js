import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  totalItems: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      state.totalItems++;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem(state, action) {
      const deleteItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === deleteItem.id
      );

      state.totalItems--;

      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== deleteItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
