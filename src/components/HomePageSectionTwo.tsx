import React, { useEffect } from "react";
import { setProducts } from "../store/app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../components/Data";
import { RootState } from "../store/store";

const HomePageSectionTwo = () => {


    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product)
    useEffect(() => {
        dispatch(setProducts(ProductsData))
    })

    const infoItems = [
        {
            icon: "/images/icon-box.png",
            title: "Free Shipping",
            description: "Upgrade your style today and get FREE shipping on all orders! Don't miss out."
        },

        {
            icon: "/images/icon-boxtwo.png",
            title: "Satisfaction Guarantee",
            description: "Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
        },

        {
            icon: "/images/icon-boxthree.png",
            title: "Secure Payment",
            description: "Your security is our priority. Your payments are secure with us."
        }
    ]
    return (
        <div className="pt-[88px] pb-[168px] max-w-[1092px] mx-auto">
            <div className="grid grid-cols-3 gap-[54px]">
                {infoItems.map((item, index) => (
                    <div key={index} className=" h-[218px] px-4 shadow-md transform transition-transform duration-300
                 hover:scale-105 cursor-pointer" >

                        <img src={item.icon} className="mt-4" />
                        <h1 className="font-semibold text-base mt-6">{item.title}</h1>
                        <p className="text-sm font-normal text-[#5C5F6A] mt-3 w-[272px]">{item.description}</p>

                    </div>
                ))}

            </div>

            <div className="mt-[72px] flex justify-center ">
                <div>
                    <span className="text-[#878A92] font-medium text-[12px]">Shop Now</span>
                    <h2 className="font-bold text-2xl text-[#0E1422]">Best Selling</h2>

                </div>
            </div>

            <div className="mt-[80px] grid grid-flow-col gap-10 ">
                {products.products.slice(2, 6).map((product: any, index: any) => (
                    <div className="transform transition-transform duration-300
                    hover:scale-105 cursor-pointer">
                        <a
                            key={index} href={`/${product.id}`}>
                            <img src={product.img} />
                            <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500">{product.title}</h4>
                            <div className="flex gap-4 mt-[14px]">
                                <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{product.stock}</div>

                                <span className="text-[#474B57] font-normal text-sm ">{product.price}</span>
                            </div>
                        </a>
                    </div>

                ))}
            </div>

        </div>


    )
}
export default HomePageSectionTwo;