import React from "react";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CartSectionOne = () => {
    return (
        <div className=" py-10">
            <div className="max-w-[1116px] mx-auto" >
                <h1 className="font-bold text-2xl text-[#0E1422]">Checkout</h1>
                <Box className='mt-2'>
                    <Breadcrumbs
                        aria-label='breadcrumbs'
                        separator={<NavigateNextIcon fontSize='small' />}

                    >
                        <Link href='#' color='text.secondary' underline="none">Ecommerce</Link>

                        <Typography color='text.primary' fontWeight='Medium'>Checkout</Typography>
                    </Breadcrumbs>

                </Box>
            </div>

        </div>

    )
}
export default CartSectionOne;
