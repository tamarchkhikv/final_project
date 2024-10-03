import React from "react";

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
        stock: "STOCK OUT",
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
];

const ProductPageSectionThree = () => {
    return (
        <div className=" flex mx-auto max-w-[1092px] py-4-">
            <div>
                <h1 className="font-bold text-2xl text-[#0E1422]">You might also like</h1>
                <h4 className="font-medium text-[12px] text-[#878A92]">SIMILAR PRODUCTS</h4>

                <div className="grid grid-rows-1 grid-flow-col mx-auto max-w-[1092px] gap-4 mt-14">
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
            </div>
        </div>


    )
}

export default ProductPageSectionThree;