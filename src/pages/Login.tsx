import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import LoginSectionOne from "../components/LoginSectionOne";
import LoginSectionTwo from "../components/LoginSectionTwo";
import FooterBlack from "../components/FooterBlack";

const Login =()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <LoginSectionOne/>
            <LoginSectionTwo/>
            <FooterBlack/>

        </div>
    )
}

export default Login;