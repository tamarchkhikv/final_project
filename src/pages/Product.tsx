import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import ProductPageSectionOne from "../components/ProductPageSectionOne";
import ProductPageSectionTwo from "../components/ProductPageSectionTwo";
import ProductPageSectionThree from "../components/ProductPageSectionThree";
import NewsLetter from "../components/NewsLetter";
import FooterWhite from "../components/FooterWhite";


const Product = ()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <ProductPageSectionOne/>
            <ProductPageSectionTwo/>
            <ProductPageSectionThree/>
            <NewsLetter/>
            <FooterWhite/>

        </div>
    )
}
export default Product;