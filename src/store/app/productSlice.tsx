
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Productstate {
  products: any
}


const initialState: Productstate = {
  products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state:any, action){
      state.products = action.payload
    }
  },
})


export const { setProducts } = productSlice.actions;

export default productSlice.reducer