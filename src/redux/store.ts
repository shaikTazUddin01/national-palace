import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import {
  searchProductReducer,
  productSortReducer,
  productPaginationReducer,
  categoryFilterReducer,
  priceRangeReducer,
  resetSliceReducer
} from "./features/product/product.slice";
import productCardReducer from "./features/my-cart/myCart.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const myCartPersistConfig = {
  key: "myCart",
  storage,
};

const persistedMyCart = persistReducer(myCartPersistConfig, productCardReducer);


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    productCard: persistedMyCart,
    searchProduct: searchProductReducer,
    sortProduct: productSortReducer,
    priceRange: priceRangeReducer,
    pagination: productPaginationReducer,
    categoryFilter: categoryFilterReducer,
    resetFilter: resetSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);