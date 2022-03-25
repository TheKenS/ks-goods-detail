import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { goodsDetailSlice } from "./goodsDetail/slice";

const rootReducer = combineReducers({ goodsDetail: goodsDetailSlice.reducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default { store };
