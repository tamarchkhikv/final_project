import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import SignUpSectionOne from "../components/SignUpSectionOne";
import SignUpSectionTwo from "../components/SignUpSectionTwo";
import FooterBlack from "../components/FooterBlack";

const SignUp =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <SignUpSectionOne/>
            <SignUpSectionTwo/>
            <FooterBlack/>

        </div>
    )
}

export default SignUp;