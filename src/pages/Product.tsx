import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import ProductPageSectionOne from "../components/ProductPageSectionOne";


const Product = ()=>{
    return(
        <div>
            <DiscountBanner/>
            <Header/>
            <ProductPageSectionOne/>

        </div>
    )
}
export default Product;