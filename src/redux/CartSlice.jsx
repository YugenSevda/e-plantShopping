import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addItem: (state, action) => {

      const item = state.cartItems.find(
        plant => plant.id === action.payload.id
      );

      if(item){

        item.quantity += 1;

      }

      else{

        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });

      }

    },

    removeItem: (state, action) => {

      state.cartItems =
      state.cartItems.filter(
        plant => plant.id !== action.payload
      );

    },

    updateQuantity: (state, action) => {

      const { id, amount } = action.payload;

      const item = state.cartItems.find(
        plant => plant.id === id
      );

      if(item){

        item.quantity += amount;

      }

      // remove item if quantity becomes 0
      state.cartItems =
      state.cartItems.filter(
        plant => plant.quantity > 0
      );

    }

  }

});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
