import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
