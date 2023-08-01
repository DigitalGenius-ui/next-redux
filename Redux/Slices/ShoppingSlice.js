"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
  data: [
    {
      id: 1,
      title: "Samsung Galaxy A51",
      price: 350,
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A12",
      price: 150,
      image_url:
        "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      price: 450,
      image_url:
        "https://kontakt.az/wp-content/uploads/2022/01/Samsung-Galaxy-S21FE-5G-6128GB-SM-G990-Gray.png",
    },
  ],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.shoppingCart.push(action.payload);
    },
    removeCard: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (card) => card.id !== action.payload.id
      );
    },
  },
});

export const { addToCard, removeCard } = shoppingSlice.actions;

export default shoppingSlice.reducer;
