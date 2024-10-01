import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import FailedOrder from "../components/FailedOrder";
import FailedOrderSectionTwo from "../components/FailedOrderSectionTwo";
import FooterBlack from "../components/FooterBlack";

const FailedPayment =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <FailedOrder/>
            <FailedOrderSectionTwo/>
            <FooterBlack/>

        </div>
    )
}
export default FailedPayment;