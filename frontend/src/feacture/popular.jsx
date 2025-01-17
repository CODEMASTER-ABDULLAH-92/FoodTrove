import { createSlice } from '@reduxjs/toolkit';
import { popular } from '../assets/asset';

const initialState = {
  popular,  // List of popular items
  cartItems: {},  // Cart items
  deliveryFee: 2.00,  // Example delivery fee
};

export const popularSlice = createSlice({
  name: 'populars',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = 1;
      } else {
        state.cartItems[itemId] += 1;
      }
    },
    removeToCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId] -= 1;
        if (state.cartItems[itemId] <= 0) {
          delete state.cartItems[itemId];
        }
      }
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setDeliveryFee: (state, action) => {
      state.deliveryFee =  action.payload;
    },
  },
});

// Selectors
export const selectTotalAmount = (state) => {
  return state.populars.popular.reduce((total, item) => {
    const quantity = state.populars.cartItems[item._id] || 0;
    return total + item.price * quantity;
  }, 0).toFixed(2);
};

export const selectDeliveryFee = (state) => state.populars.deliveryFee;

// New selector: selectFinalTotal
export const selectFinalTotal = (state) => {
  const totalAmount = selectTotalAmount(state);
  const deliveryFee = selectDeliveryFee(state);
  return (parseFloat(totalAmount) + parseFloat(deliveryFee)).toFixed(2);
};

export const { addToCart, removeToCart, setCartItems, setDeliveryFee } = popularSlice.actions;

export default popularSlice.reducer;
