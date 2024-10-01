import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import SuccessfulOrder from "../components/SuccessfulOrder";
import PaymentSectionTwo from "../components/PaymentSectionTwo";
import FooterBlack from "../components/FooterBlack";

const Successfulpayment=()=>{
    return(
    <div>
        <DiscountBanner/>
        <Header/>
        <SuccessfulOrder/>
        <PaymentSectionTwo/>
        <FooterBlack/>


    </div>

    )
}
export default Successfulpayment;