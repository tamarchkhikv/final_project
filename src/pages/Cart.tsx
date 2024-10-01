import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import CartSectionOne from "../components/CartSectionOne";
import CartSectionTwo from "../components/CartSectionTwo";
import FooterBlack from "../components/FooterBlack";

const Cart = ()=>{
    return(
        <div>
          <DiscountBanner/>
          <Header/>
          <CartSectionOne/>
          <CartSectionTwo/>
          <FooterBlack/>


        </div>
    )
}
export default Cart;