import React from "react";
import CustomPagination from "./CustomPagination";

const Listing = () => {
    const products = [
        {
            img: "/images/image-1.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$ 35.00",
        },
        {
            img: "/images/image-2.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$ 27.00",
        },
        {
            img: "/images/image-3.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$ 22.00",
        },
        {
            img: "/images/image-4.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },

        {
            img: "/images/image-5.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$ 35.00",
        },
        {
            img: "/images/image-6.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$ 27.00",
        },
        {
            img: "/images/image-8.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$ 22.00",
        },
        {
            img: "/images/image-2.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },
        {
            img: "/images/image-4.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },
    ];
    return (
        <div className="w-[824px] ml-[35px]">
            <h2 className="font-medium text-sm text-[#0E1422]">Applied Filters:</h2>
        

            <div className="grid grid-rows-3 grid-flow-col gap-10  mt-4">
                {products.map((product, index) => (
                    <div key={index}>
                        <div className="w-60 h-80 bg-neutral-100 rounded">
                            <img src={product.img} />
                        </div>
                        <div>
                            <p className="font-medium text-sm mt-3">{product.title}</p>
                            <div className="flex items-center  mt-2 ">
                                <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                    {product.stock}
                                </button>
                                <div className="mt-3 ml-2 font-normal text-sm text-center">
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CustomPagination/>
        </div>
    )
}
export default Listing;