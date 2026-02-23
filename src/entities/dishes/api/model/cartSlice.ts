import type { IDish } from "@/entities/dishes/types/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICartItem extends IDish {
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IDish>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
