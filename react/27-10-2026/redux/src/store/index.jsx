import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

export const store = configureStore({
  reducer: combineReducers({
    counter: reducers.counter,
  }),
});
