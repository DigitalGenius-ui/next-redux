import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./Slices/CounterSlice";
import TodoReducer from "./Slices/TodoSlice";
import ShopReducer from "./Slices/ShoppingSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const baseReducer = combineReducers({
  counter: CounterReducer,
  todo: TodoReducer,
  shop : ShopReducer,
});

const persistedReducer = persistReducer(persistConfig, baseReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
