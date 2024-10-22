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
// import { AccountBalance } from "@mui/icons-material";
import AccountDetail from "../components/profileTabs/AccountDetail";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();

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

                        <TabList className="flex flex-col mt-[120px] gap-4 w-[212px]">

                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/cart.svg" />
                                <button onClick={()=>{navigate(`/profile?search=orders`)}}>Orders</button>
                            </Tab>


                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/heart.svg" />
                                <button onClick={()=>{navigate(`/profile?search=wishlist`)}}>Wishlist</button>
                            </Tab>

                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/delivery.svg" />
                                <button onClick={()=>{navigate(`/profile?search=address`)}}>Address</button>
                            </Tab>

                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/key.svg" />
                                <button onClick={()=>{navigate(`/profile?search=password`)}}>Password</button>
                            </Tab>

                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/user.svg" />
                                <button onClick={()=>{navigate(`/profile?search=accountdetail`)}}>Account Detail</button>
                            </Tab>

                            <Tab className="outline-none flex px-6 py-2 gap-[10px] hover:bg-[#F6F6F6] rounded-lg">
                                <img src="/images/logout.svg" />
                                <button onClick={()=>{navigate(`/profile?search=logout`)}}>Logout</button>
                            </Tab>

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
                                <AccountDetail />
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
