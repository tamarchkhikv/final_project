import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Link } from "react-router-dom";

const ProductPageSectionTwo = () => {

    return (
        <div className='max-w-[1092px] mx-auto '>
            <TabGroup defaultIndex={1}>
                <div className="flex gap-8">

                    <TabList>
                        <div className="flex flex-col w-[241px] h-[98px] mt-[248px]">
                            <Tab className='flex items-center px-6 gap-[10px] h-[41px] hover:bg-[#F6F6F6] outline-none
                                           data-[selected]:bg-gray-200 rounded-md '>

                                <img src='/images/more.svg' />
                                <h3>Details</h3>

                            </Tab>


                            <Tab className='flex items-center px-6 gap-[10px] h-[41px] hover:bg-[#F6F6F6] outline-none
                                            data-[selected]:bg-gray-200 rounded-md' >

                                <img src='/images/empty-star.svg' />
                                <h3>Reviews</h3>

                            </Tab>


                        </div>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div className="w-[727px] py-[176px]">
                                <h2 className="font-semibold text-base text-[#0E1422]">Detail</h2>
                                <p className="mt-6">Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe
                                    essential for modern men. Crafted with meticulous
                                    attention to detail and designed for comfort, these versatile
                                    black tees are a must-have addition to your collection.
                                    The classic black color never goes out of style. Whether
                                    you're dressing up for a special
                                    occasion or keeping it casual, these black t-shirts are the
                                    perfect choice, effortlessly complementing any outfit.
                                </p>


                                <ul className="mt-14 list-disc ml-7">
                                    <li>Premium Quality</li>
                                    <li>Versatile Wardrobe Staple</li>
                                    <li>Available in Various Sizes</li>
                                    <li>Tailored Fit</li>
                                </ul>
                            </div>
                        </TabPanel>


                        <TabPanel>

                            <div className="pt-[176px] pb-[120px] w-[727px]">

                                <div className="pb-4 border-b-[1px]">
                                    <h3 className="font-semibold text-base text-[#0E1422]">Reviews</h3>
                                    <div className="flex mt-4 items-baseline gap-4">
                                        <h2 className="font-bold text-[32px] text-[#0E1422]">4.2</h2>
                                        <h5 className="font-normal text-sm text-[#71747E]">— 54 Reviews</h5>
                                    </div>
                                    <Link to="/writereviw">
                                        <button className=" mt-10 w-36 h-11 border-[1px] rounded-[4px]">Write a review</button>
                                    </Link>
                                    <div className="flex items-center justify-end">
                                        <a className="font-medium text-[12px] text-[#5C5F6A] gap-[6px]">SORT BY</a>
                                        <img src="/images/down.svg" alt="photo" />

                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between h-[161px] ">
                                        <div className="flex gap-6">
                                            <img src="/images/avatar.svg" className="w-12 h-12 mt-[39px]" alt="photo"></img>
                                            <div className="mt-[38px]">
                                                <h2 className="font-medium text-sm text-[#0E1422]">Emily Davis</h2>
                                                <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px]">1 Week ago</h3>
                                                <p className="mt-4 font-normal text-sm text-[#5C5F6A]">This company always goes above and beyond to satisfy their customers.</p>
                                            </div>
                                        </div>
                                        <img src="/images/5star.svg" className="w-24 h-4 mt-[38px]" />
                                    </div>
                                    <div className="flex justify-between h-[161px]">
                                        <div className="flex gap-6">
                                            <img src="/images/avatar.svg" className="w-12 h-12 mt-[39px]" alt="photo"></img>
                                            <div className="mt-[38px]">
                                                <h2 className="font-medium text-sm text-[#0E1422]">Daniel Smith</h2>
                                                <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px]">2 Month ago</h3>
                                                <p className="mt-4 font-normal text-sm text-[#5C5F6A]">I can't believe how affordable and high-quality this item is!</p>
                                            </div>
                                        </div>
                                        <img src="/images/5star.svg" className="w-24 h-4 mt-[38px]" alt="photo" />
                                    </div>
                                    <div className="flex justify-between h-[161px]">
                                        <div className="flex gap-6">
                                            <img src="/images/avatar.svg" className="w-12 h-12 mt-[39px]" alt="photo"></img>
                                            <div className="mt-[38px]">
                                                <h2 className="font-medium text-sm text-[#0E1422]">Benjamin Clark</h2>
                                                <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px]">23 April</h3>
                                                <p className="mt-4 font-normal text-sm text-[#5C5F6A]">These guys know their stuff, and it shows in their products.</p>
                                            </div>
                                        </div>
                                        <img src="/images/5star.svg" className="w-24 h-4 mt-[38px]" alt="photo" />
                                    </div>

                                </div>
                                <div className="flex justify-center mt-16">

                                    <button className="w-[175px] h-11 border-[1px] rounded-[4px] text-sm text-[#5C5F6A] font-medium">Load more reviews</button>
                                </div>

                            </div>




                        </TabPanel>

                    </TabPanels>
                </div>
            </TabGroup >
        </div>
    )
}


export default ProductPageSectionTwo;