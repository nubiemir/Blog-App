import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import userSlice from "../features/userSlice";
export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
});
