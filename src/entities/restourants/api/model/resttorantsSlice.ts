import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface RestaurantState {
  selectedRestaurantId: number | null;
}

const initialState: RestaurantState = {
  selectedRestaurantId: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action: PayloadAction<number>) => {
      state.selectedRestaurantId = action.payload;
    },
  },
});

export const { setSelectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
