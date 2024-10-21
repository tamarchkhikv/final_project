import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../store/app/productSlice";
import cartReducer from "../store/app/cartSlice";



export const store = configureStore ({
  reducer: {
   cart: cartReducer,
   product: productReducer,
    
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

