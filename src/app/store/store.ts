import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api/baseApi";
import authReducer from "@/features/auth/api/model/authSlice";
import restorantReducer from "@/entities/restourants/api/model/resttorantsSlice";
import cartReducer from "@/entities/dishes/api/model/cartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restorantReducer,
    cart: persistedCartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export const persistor = persistStore(store);
