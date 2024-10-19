import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../store/app/productSlice";
import cartSlice from "../store/app/cartSlice";



export const store = configureStore ({
  reducer: {
   cart: cartSlice,
   product: productSlice,
    
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

