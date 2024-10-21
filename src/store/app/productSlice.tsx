
import { createSlice } from '@reduxjs/toolkit';

interface Productstate {
  products:[]
}


const initialState: Productstate = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state:any, action){
      state.products = action.payload
    }
  },
})


export const { setProducts } = productSlice.actions;

export default productSlice.reducer