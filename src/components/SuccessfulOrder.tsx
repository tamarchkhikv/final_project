import React from "react";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SuccessfulOrder = () => {
    return (
        <div className="bg-[#D5E5D7] h-[160px] py-10">
            <div className="max-w-[1116px] mx-auto">
                <h1 className="font-bold text-2xl text-[#0E1422]">Successful Order</h1>
                <div className="mt-2">
                    <Box >
                        <Breadcrumbs
                            aria-label='breadcrumbs'
                            separator={<NavigateNextIcon fontSize='small' />}

                        >
                            <Link href='#' color='text.secondary'>Ecommerce</Link>

                            <Typography color='text.primary' fontWeight='Medium'>Successful Order</Typography>
                        </Breadcrumbs>

                    </Box>
                </div>

            </div>
        </div>

    )
}
export default SuccessfulOrder;