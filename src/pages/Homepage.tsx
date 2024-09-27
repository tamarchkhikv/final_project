import React from "react";
import Header from '../components/Header';
import DiscountBanner from "../components/DiscountBanner";
import HomePageSectionOne from "../components/HomePageSectionOne";
import HomePageSectionTwo from "../components/HomePageSectionTwo";
import HomePageSectionThree from "../components/HomePageSectionThree";
import HomePageSectionFour from "../components/HomePageSectionFour";
import NewsLetter from "../components/NewsLetter";
import FooterWhite from "../components/FooterWhite";

const Homepage = () => {
    return (
        <div>
            
            <DiscountBanner />
            <Header />
            <HomePageSectionOne />
            <HomePageSectionTwo />
            <HomePageSectionThree/>
            <HomePageSectionFour/>
            <NewsLetter/>
            <FooterWhite/>
            
        </div>
    )
}
export default Homepage;