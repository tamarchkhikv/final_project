import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FooterBlack from "../components/FooterBlack";


const Profile = () => {

    return (
        <div>
            <DiscountBanner />
            <Header />
            <div className="bg-[#F6F6F6] h-[160px] py-10">
                <div className='max-w-[1116px] mx-auto'>
                    <h1 className="font-bold text-2xl text-[#0E1422] ">My Account</h1>
                    <div className="mt-2">
                        <Box>
                            <Breadcrumbs
                                aria-label='breadcrumbs'
                                separator={<NavigateNextIcon fontSize='small' />}

                            >
                                <Link underline='none' href='#' color='text.secondary'>Ecommerce</Link>

                                <Typography color='text.primary' fontWeight='Medium'>My Account</Typography>
                            </Breadcrumbs>

                        </Box>
                    </div>
                </div>
            </div>

            <div className="max-w-[1116px] mx-auto">

                <TabGroup>

                    <div className="flex gap-9">

                        <TabList>
                            <div className="flex flex-col mt-[120px] gap-4 w-[212px]">

                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/cart.svg" />
                                        <button>Orders</button>
                                    </div>

                                </Tab>


                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/heart.svg" />
                                        <button>Wishlist</button>
                                    </div>

                                </Tab>

                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/delivery.svg" />
                                        <button>Address</button>
                                    </div>

                                </Tab>

                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/key.svg" />
                                        <button>Password</button>
                                    </div>

                                </Tab>

                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/user.svg" />
                                        <button>Account Detail</button>
                                    </div>

                                </Tab>

                                <Tab>
                                    <div className="flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                        <img src="/images/logout.svg" />
                                        <button>Logout</button>
                                    </div>

                                </Tab>

                            </div>
                        </TabList>



                        <TabPanels>
                            <TabPanel>
                                <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px]">
                                    <h2 className="font-semibold text-base text-[#0E1422]">Orders</h2>
                                    <div className="flex items-center mt-14 pb-8 border-b-[1px]">
                                        <img src='/images/cartimage1.png' />
                                        <div className="ml-8 ">
                                            <h2 className="font-medium text-sm text-[#0E1422]">Raw Black T-Shirt Lineup</h2>
                                            <h4 className="font-medium text-[12px] text-[#5C5F6A]">Ordered on: 27 July 2023</h4>
                                            <span className="font-medium text-[12px] text-[#0E1422]">$70.00</span>


                                        </div>
                                        <div className="border-b-[1px] border-[#0E1422] ml-[116px]">
                                            <span>Processing</span>
                                        </div>

                                        <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">View item</button>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img src='/images/cartimage2.png' />
                                        <div className="ml-8 ">
                                            <h2 className="font-medium text-sm text-[#0E1422]">Monochromatic Wardrobe</h2>


                                            <h4 className="font-medium text-[12px] text-[#5C5F6A]">Ordered on: 9 march 2023</h4>
                                            <span className="font-medium text-[12px] text-[#0E1422]">$27.00</span>
                                        </div>
                                        <div className="border-b-[1px] border-[#0E1422] ml-[116px]">
                                            <span>Completed</span>
                                        </div>

                                        <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">View item</button>
                                    </div>
                                </div>

                            </TabPanel>


                            <TabPanel>
                                <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px]">
                                    <h2 className="font-semibold text-base text-[#0E1422]">Wishlist</h2>
                                    <div className="flex items-center mt-14 pb-8 border-b-[1px]">
                                        <img src='/images/cartimage1.png' />
                                        <div className="ml-8 ">
                                            <h2 className="font-medium text-sm text-[#0E1422]">Raw Black T-Shirt Lineup</h2>
                                            <h4 className="font-medium text-[12px] text-[#5C5F6A]">Ordered on: 27 July 2023</h4>
                                            <span className="font-medium text-[12px] text-[#0E1422]">Remove item</span>


                                        </div>
                                        <h3 className="ml-[134px] font-medium text-sm text-[#0E1422]">$75.00</h3>

                                        <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">Add to cart</button>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img src='/images/cartimage2.png' />
                                        <div className="ml-8 ">
                                            <h2 className="font-medium text-sm text-[#0E1422]">Essential Neutrals</h2>


                                            <h4 className="font-medium text-[12px] text-[#5C5F6A]">Added on: 27 July 2023</h4>
                                            <span className="font-medium text-[12px] text-[#0E1422]">Remove item</span>
                                        </div>
                                        <h3 className="ml-[162px] font-medium text-sm text-[#0E1422]">$22.00</h3>

                                        <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">Add to cart</button>
                                    </div>
                                </div>


                            </TabPanel>


                            <TabPanel>
                                <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px] w-[534px]">
                                    <h1 className="font-semibold text-base text-[#0E1422]">Shipping Address</h1>
                                    <div className="mt-10">
                                        <label className="font-medium text-sm text-[#000000]">Street Address</label>
                                        <input className="w-[534px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div>
                                            <label className="font-medium text-sm text-[#000000]">City</label>
                                            <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                                        </div>
                                        <div>
                                            <label className="font-medium text-sm text-[#000000]">State</label>
                                            <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div>
                                            <label className="font-medium text-sm text-[#000000]">Zip Code</label>
                                            <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                                        </div>
                                        <div>
                                            <label className="font-medium text-sm text-[#000000]">Country</label>
                                            <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                                        </div>
                                    </div>
                                    <button className='w-36 h-11 rounded-[4px] bg-black text-white py-3 text-sm mt-16'>Save Changes</button>
                                </div>


                            </TabPanel>

                            <TabPanel>
                                <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px] w-[534px]">
                                    <h1 className="font-semibold text-base text-[#0E1422]">Change Password</h1>
                                    <div className="flex flex-col mt-12">
                                        <label>New Password</label>
                                        <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <label>Confirm Password</label>
                                        <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
                                    </div>
                                    <button className='w-36 h-11 rounded-[4px] bg-black text-white py-3 text-sm mt-16'>Change password</button>
                                </div>

                            </TabPanel>



                            <TabPanel>
                                <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px] w-[534px]">
                                    <h1 className="font-semibold text-base text-[#0E1422]">Account Details</h1>
                                    <img src='/images/avatar1.svg' className="mt-10" />
                                    <div className="flex flex-col mt-8">
                                        <label>Full name</label>
                                        <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <label>Email</label>
                                        <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
                                    </div>
                                    <button className='w-36 h-11 rounded-[4px] bg-black text-white py-3 text-sm mt-16'>Save Changes</button>
                                </div>

                            </TabPanel>

                            <TabPanel>
                                <div className=" h-[504px] border-l-[1px] pt-16 pb-[131px]">
                                    <div className="w-[273px] h-[181px] ml-[280px] mt-[135px]">
                                        <img src='/images/empty-state.svg' className="w-16 h-16 mx-auto" />
                                        <h4 className="font-normal text-sm text-[#5C5F6A] text-center">Your order history is waiting to be filled.</h4>
                                        <div className="mt-6 bg-[#0E1422] w-[179px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md mx-auto">
                                            <button>Start Shopping</button>
                                            <img src='/images/arrow-right.png' className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </div>

                </TabGroup >
            </div >
            <FooterBlack />
        </div >
    )
}


export default Profile;
