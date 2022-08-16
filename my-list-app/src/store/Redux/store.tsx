import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./Theme";
import { userReducer } from "./Users";
import createSagaMiddleware from "redux-saga";
import localstoragemiddleware from "./localstoragemiddleware";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
    theme: themeReducer,
  },
  middleware: [saga],
});
saga.run(localstoragemiddleware);
export default store;
