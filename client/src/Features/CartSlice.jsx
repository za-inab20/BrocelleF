import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orders: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({
        ...action.payload,
        id: Date.now(),
      });
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    // 🔥 Submit cart to admin
    submitOrder: (state) => {
      if (state.cartItems.length === 0) return;

      const newOrder = {
        id: Date.now(),
        items: state.cartItems,
        total: state.cartItems
          .reduce((t, i) => t + parseFloat(i.price), 0)
          .toFixed(2),
      };

      state.orders.push(newOrder);
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, submitOrder } =
  CartSlice.actions;

export default CartSlice.reducer;
