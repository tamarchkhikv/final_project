import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import CheckoutSectionOne from "../components/CheckoutSectionOne";
import CheckoutSectionTwo from "../components/CheckoutSectionTwo";
import FooterBlack from "../components/FooterBlack";


const Checkout =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <CheckoutSectionOne/>
            <CheckoutSectionTwo/>
            <FooterBlack/>

        </div>

    )
}
export default Checkout;