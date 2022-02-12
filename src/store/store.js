import { configureStore } from "@reduxjs/toolkit";
import edvoraSlice from "./evdoraSlice";
const store = configureStore({
  reducer: edvoraSlice,
});

export default store;
