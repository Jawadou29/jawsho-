import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products-slice";
import cartReducer from "./slices/cart-slice";

export let store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  }
})