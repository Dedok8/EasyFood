import type { IDish } from "@/entities/dishes/types/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  dish: IDish;
  quantity: number;
}

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IDish>) {
      const existing = state.items.find(
        (item) => item.dish.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ dish: action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.dish.id !== action.payload
      );
    },

    clearCart(state) {
      state.items = [];
    },

    decrementFromCart(state, action: PayloadAction<number>) {
      const existing = state.items.find(
        (item) => item.dish.id === action.payload
      );
      if (existing) {
        if (existing.quantity <= 1) {
          state.items = state.items.filter(
            (item) => item.dish.id !== action.payload
          );
        } else {
          existing.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decrementFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
