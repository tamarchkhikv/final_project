import React from "react";
import CustomPagination from "./CustomPagination";

const Listing = () => {
    const products = [
        {
            id: 1,
            img: "/images/image-1.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$ 35.00",
        },
        {
            id: 2,
            img: "/images/image-2.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$ 27.00",
        },
        {
            id: 3,
            img: "/images/image-3.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$ 22.00",
        },
        {
            id: 4,
            img: "/images/image-4.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },

        {
            id: 5,
            img: "/images/image-5.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$ 35.00",
        },
        {
            id: 6,
            img: "/images/image-6.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$ 27.00",
        },
        {
            id: 7,
            img: "/images/image-8.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$ 22.00",
        },
        {
            id: 8,
            img: "/images/image-2.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },
        {
            id: 9,
            img: "/images/image-4.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$ 47.00",
        },
    ];
    return (
        <div className="w-[824px] ml-10">
            <h2 className="font-medium text-sm text-[#0E1422]">Applied Filters:</h2>
            <div className="flex gap-3 mt-3">
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px] ">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Perfume</h3>
                    <button>
                        <img src='/images/x.svg'/>
                    </button>
                </div>
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px]">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Size: M</h3>
                    <button>
                        <img src='/images/x.svg'/>
                    </button>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <h3 className="font-medium text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</h3>
                <div className="flex gap-[6px] items-center">
                    <h3 className="font-medium text-[12px] text-[#5C5F6A]">SORT BY</h3>
                    <button>
                        <img src='/images/down.svg'/>
                    </button>
                </div>

            </div>
        

            <div className="grid grid-rows-3 grid-flow-col gap-10  mt-4">
                {products.map((product, index) => (
                    <a key={index} href={`/listing/${product.id}`}>
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
                    </a>
                ))}
            </div>
            <CustomPagination/>
        </div>
    )
}
export default Listing;