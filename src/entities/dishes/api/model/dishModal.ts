import type { IDish } from "@/entities/dishes/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const dishModalSlice = createSlice({
  name: "dishModal",
  initialState: { dish: null as IDish | null },
  reducers: {
    openDishModal: (state, action) => {
      state.dish = action.payload;
    },
    closeDishModal: (state) => {
      state.dish = null;
    },
  },
});

export const { openDishModal, closeDishModal } = dishModalSlice.actions;

export default dishModalSlice.reducer;
