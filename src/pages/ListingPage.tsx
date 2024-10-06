import React from "react";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Categories from "../components/Categories";
import Listing from "../components/Listing";
import NewsLetter from "../components/NewsLetter";
import FooterWhite from "../components/FooterWhite";

const ListingPage = () => {
    return (
        <div>
            <DiscountBanner />
            <Header />
            <div className="bg-[#F6F6F6] py-[18px]">
                <div className='max-w-[1116px] mx-auto '>
                    <Box>
                        <Breadcrumbs
                            aria-label='breadcrumbs'
                            separator={<NavigateNextIcon fontSize='small' />}

                        >
                            <Link underline='none' href='#' color='text.secondary'>Ecommerce</Link>

                            <Typography color='text.primary' fontWeight='Medium'>Search</Typography>
                        </Breadcrumbs>

                    </Box>
                </div>
            </div>

            <div className='max-w-[1116px] mx-auto flex mt-8 mb-32'>
                <Categories/>
                <Listing/>

            </div>
            <NewsLetter/>
            <FooterWhite/>
        </div>
    )
}
export default ListingPage;


