import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api/baseApi";
import authReducer from "@/features/auth/api/model/authSlice";
import restaurantReducer from "@/entities/restourants/api/model/resttorantsSlice";
import cartReducer from "@/entities/orders/api/model/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import openDishModalReducer from "@/entities/dishes/api/model/dishModal";

const persistConfig = {
  key: "restaurant",
  storage,
  whitelist: ["selectedRestaurantId"],
};

const persistedRestaurantReducer = persistReducer(
  persistConfig,
  restaurantReducer
);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: persistedRestaurantReducer,
    cart: cartReducer,
    dish: openDishModalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export const persistor = persistStore(store);
