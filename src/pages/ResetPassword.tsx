import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import ResetPasswordSectionOne from "../components/ResetPasswordSectionOne";
import ResetPasswordSectionTwo from "../components/ResetPasswordSectionTwo";
import FooterBlack from "../components/FooterBlack";

const ResetPassword =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <ResetPasswordSectionOne/>
            <ResetPasswordSectionTwo/>
            <FooterBlack/>

        </div>
    )
}

export default ResetPassword;