import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
//Here we define the AppDispatch type, which is the type of the store.dispatch method.
export type AppDispatch = typeof store.dispatch;
//Here we define the RootState type, which is the return type of the store.getState() method.
export type RootState = ReturnType<typeof store.getState>;

export default store;
