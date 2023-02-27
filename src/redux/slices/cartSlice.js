import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    plusCount(state, action) {
      state.items.find((item) => item.id === action.payload).count++;
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    minusCount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.count > 1) {
        item.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== item.id);
      }
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, plusCount, minusCount } =
  filterSlice.actions;
export default filterSlice.reducer;
