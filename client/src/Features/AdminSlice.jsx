import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  products: [],
  orders: [],
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index !== action.payload
      );
    },

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item, index) => index !== action.payload
      );
    },

    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const {
  addUser,
  deleteUser,
  addProduct,
  deleteProduct,
  addOrder,
} = AdminSlice.actions;

export default AdminSlice.reducer;