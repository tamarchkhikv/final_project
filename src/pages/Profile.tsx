import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FooterBlack from "../components/FooterBlack";
import Orders from "../components/profileTabs/Orders";
import Whishlist from "../components/profileTabs/Whishlist";
import Address from "../components/profileTabs/Address";
import Password from "../components/profileTabs/Password";
import { AccountBalance } from "@mui/icons-material";
import AccountDetail from "../components/profileTabs/AccountDetail";


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
                                <Orders />
                            </TabPanel>


                            <TabPanel>
                                <Whishlist />
                            </TabPanel>


                            <TabPanel>
                                <Address />
                            </TabPanel>

                            <TabPanel>
                                <Password />
                            </TabPanel>



                            <TabPanel>
                               <AccountDetail/>
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
