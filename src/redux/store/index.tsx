import { configureStore } from "@reduxjs/toolkit";
import NutSliceReducer from "../slices/NutSlice"; // Adjust the path to match your project structure

export const store = configureStore({
  reducer: {
    counter: NutSliceReducer, // Use the correct reducer here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
