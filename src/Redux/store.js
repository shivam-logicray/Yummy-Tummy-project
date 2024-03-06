import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";
import orderSlice from "./orderSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    order: orderSlice,
    search: searchSlice,
  },
});

export default store;
