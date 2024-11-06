import React, { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


const HomePageSectionFour = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState<boolean>(true);


    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://fakestoreapi.com/products');

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data: any = await res.json();

            setApiData(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getData()
    }, [])


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
                    <div>
                        {loading ? (
                            <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
                        ) : (
                            <TabPanel className="mt-[80px] grid grid-flow-col gap-10" data-aos="flip-down">

                                {apiData.slice(12, 16).map((product: any, index: any) => (
                                    <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer w-[264px] h-[434px]">
                                        <a key={index} href={`/${product.id}`}>
                                            <img src={product.image} className="vw-[200px] h-[230px] mx-auto " />
                                            <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500 text-center">{product.title}</h4>
                                            <div className="flex justify-center gap-4 mt-[14px]">
                                                <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">
                                                    {product.rating.count === 0
                                                        ? "out of stock"
                                                        : product.rating.count < 5
                                                            ? "low stock"
                                                            : "in stock"}
                                                </div>

                                                <span className="text-[#474B57] font-normal text-sm ">${product.price}</span>
                                            </div>
                                        </a>
                                    </div>

                                ))}

                            </TabPanel>
                        )}
                    </div>
                    <div>
                        {loading ? (
                            <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
                        ) : (

                            <TabPanel className="mt-[80px] grid grid-flow-col gap-10" data-aos="flip-down" >
                            

                                {apiData.slice(8, 12).map((product: any, index: any) => (
                                    <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer w-[264px] h-[434px]">
                                        <a key={index} href={`/${product.id}`}>
                                            <img src={product.image} className="w-[200px] h-[230px] mx-auto" />
                                            <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500 text-center">{product.title}</h4>
                                            <div className="flex justify-center gap-4 mt-[14px]">
                                                <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">
                                                    {product.rating.count === 0
                                                        ? "out of stock"
                                                        : product.rating.count < 5
                                                            ? "low stock"
                                                            : "in stock"}
                                                </div>

                                                <span className="text-[#474B57] font-normal text-sm "> $ {product.price}</span>
                                            </div>
                                        </a>
                                    </div>

                                ))}

                            </TabPanel>
                        )}
                    </div>
                </TabPanels>
            </TabGroup>
        </div >


    )
}

export default HomePageSectionFour;