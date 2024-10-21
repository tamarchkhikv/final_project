import { createSlice } from '@reduxjs/toolkit'

interface Productstate {
  products:[],
  totalQuantity: number,
  totalPrice: number
}


const initialState: Productstate = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state:any, action:any){
      const newItem = action.payload;
      const itemIndex = state.products.find((item:any) => item.id=== newItem.id)
       if(itemIndex) {
        itemIndex.quantity ++;
        itemIndex.totalPrice += newItem.price
       } else {
        state.products.push({
          id: newItem.id,
          title: newItem.name,
          price: newItem.price,
          image: newItem.image,
          stock: newItem.stock,
          quantity:1,
          totalPrice: newItem.price,
        
        })
       }
       state.totalPrice += newItem.price;
       state.totalQuantity++;
    }
  }
    
})



export const {addToCart} =cartSlice.actions
export default cartSlice.reducer