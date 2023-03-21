import { configureStore } from "@reduxjs/toolkit";
import auth from "./basket";

export const mystore = configureStore({
  reducer: {
    basket: auth
  },
});

