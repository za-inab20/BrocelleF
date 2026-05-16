import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Features/UserSlice";
import CartReducer from "./Features/CartSlice";
import AdminReducer from "./Features/AdminSlice";

export const store = configureStore({
  reducer: {
    counter: UserReducer,
    cart: CartReducer,
    admin: AdminReducer,
  },
});