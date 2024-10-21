import React,{useEffect} from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { setProducts } from "../store/app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../components/Data";
import { RootState } from "../store/store";

const HomePageSectionFour = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product)
    useEffect(() => {
        dispatch(setProducts(ProductsData))
    })

   
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

                        {products.products.slice(4, 8).map((product:any, index:any) => (
                            <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer">
                                <a key={index} href={`/${product.id}`}>
                                    <img src={product.img} />
                                    <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500">{product.title}</h4>
                                    <div className="flex gap-4 mt-[14px]">
                                        <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{product.stock}</div>

                                        <span className="text-[#474B57] font-normal text-sm ">{product.price}</span>
                                    </div>
                                </a>
                            </div>

                        ))}

                    </TabPanel>

                    <TabPanel className="mt-[80px] grid grid-flow-col gap-10">

                        {products.products.slice(0, 4).map((product:any, index:any) => (
                            <div className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer">
                                <a key={index} href={`/${product.id}`}>
                                    <img src={product.img} />
                                    <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500">{product.title}</h4>
                                    <div className="flex gap-4 mt-[14px]">
                                        <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">{product.stock}</div>

                                        <span className="text-[#474B57] font-normal text-sm ">{product.price}</span>
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