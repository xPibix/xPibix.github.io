import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api.js";
import { usersReducer } from "./api/users.slice.js";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
