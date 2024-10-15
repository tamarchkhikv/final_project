import React from "react";

const HomePageSectionFour = () => {
    const products = [
        {
            id: 5,
            img: "/images/image-5.png",
            title: "Elegant Ebony Sweatshirts",
            stock: "IN STOCK",
            price: "$ 35.00",
        },
        {
            id: 6,
            img: "/images/image-6.png",
            title: "Sleek and Cozy Black",
            stock: "IN STOCK",
            price: "$ 50.00",
        },
        {
            id: 7,
            img: "/images/image-7.png",
            title: "Raw Black Tees<",
            stock: "IN STOCK",
            price: "$ 19.00",
        },
        {
            id: 8,
            img: "/images/image-8.png",
            title: "MOCKUP Black",
            stock: "IN STOCK",
            price: "$ 30.00",
        }
    ]


    return (
        <div className="mt-[152px] mb-[192px] max-w-[1116px] mx-auto">
            <div className="flex justify-center gap-6">

                <button className="rounded-[100px] border-[#E9E9EB] border-[1px] py-[3px] px-[16px] font-medium text-[14px] 
                text-[#202533]">Featured</button>
                <button className="font-normal text-[14px] text-[#717171]">Latest</button>

            </div>

            <div className="mt-[80px] grid grid-flow-col gap-10 overflow-auto">
                {products.map((product, index) => (
                    <a key={index} href={`/${product.id}`}>
                        <img src={product.img} />
                        <h4 className="mt-[25px] font-medium text-sm">{product.title}</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{product.stock}</div>

                            <span className="text-[#474B57] font-normal text-sm ">{product.price}</span>
                        </div>
                    </a>

                ))}
            </div>
        </div>


    )
}

export default HomePageSectionFour;