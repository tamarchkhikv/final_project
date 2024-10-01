import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import ForgetPasswordSectionOne from "../components/ForgetPasswordSectionOne";
import ForgetPasswordSectionTwo from "../components/ForgetPasswordSectionTwo";
import FooterBlack from "../components/FooterBlack";

const ForgotPasssword =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <ForgetPasswordSectionOne/>
            <ForgetPasswordSectionTwo/>
            <FooterBlack/>

        </div>
    )
}

export default ForgotPasssword;