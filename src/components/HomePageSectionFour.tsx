import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

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
            title: "Raw Black Tees",
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

    const items = [
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
            price: "$ 43.00",
        }
    ]


    return (
        <div className="mt-[152px] mb-[192px] max-w-[1116px] mx-auto">
            <TabGroup>
                <TabList className="flex justify-center gap-6">


                    <Tab className="rounded-[100px] border-[#E9E9EB] border-[1px] outline-none px-[16px] active:border-black
                     py-[3px] font-medium text-[14px]  text-[#717171] hover:text-[#202533] ">Featured</Tab>
                    <Tab className="font-medium text-[14px] text-[#717171] hover:text-[#202533] py-[3px] px-[16px] rounded-[100px] 
                    border-[#E9E9EB] border-[1px] outline-none active:border-black">Latest</Tab>


                </TabList>
                <TabPanels>
                    <TabPanel className="mt-[80px] grid grid-flow-col gap-10">

                        {products.map((product, index) => (
                            <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer">
                                <a key={index} href={`/${product.id}`}>
                                    <img src={product.img} />
                                    <h4 className="mt-[25px] font-medium text-sm">{product.title}</h4>
                                    <div className="flex gap-4 mt-[14px]">
                                        <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{product.stock}</div>

                                        <span className="text-[#474B57] font-normal text-sm ">{product.price}</span>
                                    </div>
                                </a>
                            </div>

                        ))}

                    </TabPanel>

                    <TabPanel className="mt-[80px] grid grid-flow-col gap-10">

                        {items.map((item, index) => (
                            <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer">
                                <a key={index} href={`/${item.id}`}>
                                    <img src={item.img} />
                                    <h4 className="mt-[25px] font-medium text-sm">{item.title}</h4>
                                    <div className="flex gap-4 mt-[14px]">
                                        <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{item.stock}</div>

                                        <span className="text-[#474B57] font-normal text-sm ">{item.price}</span>
                                    </div>
                                </a>
                            </div>

                        ))}

                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div >


    )
}

export default HomePageSectionFour;