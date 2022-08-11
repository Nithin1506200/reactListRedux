import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./Theme";
import { userReducer } from "./Users";
const store = configureStore({
  reducer: {
    users: userReducer,
    theme: themeReducer,
  },
});

export default store;
