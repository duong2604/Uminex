import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/data.types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as any)
  : { cartItems: [], shippingAddress: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems?.find(
        (x: Product) => x._id === item._id,
      );
      if (existItem) {
        existItem.quantity += 1;
      } else {
        item.quantity = 1;
        state.cartItems = [...state.cartItems, item];
      }

      // calculate items price
      state.itemsPrice = state.cartItems.reduce(
        (acc: number, item: any) => acc + item.price * item.quantity,
        0,
      );
      // calculate shipping price
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;
      // calculate tax price
      state.taxPrice = state.itemsPrice * 0.1;
      // calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;

      const existItem = state.cartItems.find(
        (item: Product) => item._id === product._id,
      );

      if (existItem) {
        existItem.quantity += quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item._id !== action.payload.id,
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeAllFromCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },

    incrementQty: (state, action) => {
      const existItem = state.cartItems.find(
        (item: any) => item._id === action.payload._id,
      );
      if (existItem) {
        if (existItem.quantity < existItem.countInStock) {
          existItem.quantity += 1;
        } else {
          existItem.quantity = existItem.countInStock;
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decrementQty: (state, action) => {
      const existItem = state.cartItems.find(
        (item: any) => item._id === action.payload._id,
      );
      if (existItem) {
        existItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    addShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  removeAllFromCart,
  incrementQty,
  decrementQty,
  addShippingAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
