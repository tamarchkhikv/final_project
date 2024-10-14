import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChartOne from '../adminpagescomponenets/ChartOne';
import ChartLine from '../adminpagescomponenets/ChartLine';
import ChartThree from '../adminpagescomponenets/ChartThree';


const Dashboard = () => {
    const tables = [
        {
            item: 'Mens Black T-Shirts',
            data: '20 Mar, 2023',
            total: "$75.00",
            status: 'Processing'

        },
        {
            item: 'Essential Neutrals',
            data: '19 Mar, 2023',
            total: "$22.00",
            status: 'Processing'

        },
        {
            item: 'Sleek and Cozy Black',
            data: '7 Feb, 2023',
            total: "$57.00",
            status: 'Completed'

        },
        {
            item: 'MOCKUP Black',
            data: '29 Jan, 2023',
            total: "$30.00",
            status: 'Completed'

        },
        {
            item: 'Monochromatic Wardrobe',
            data: '27 Jan, 2023',
            total: "$27.00",
            status: 'Completed'

        },
    ]
    return (
        <div className='ml-9'>
            <div className='flex items-center justify-between py-[22px]'>
                <Box >
                    <Breadcrumbs
                        aria-label='breadcrumbs'
                        separator={<NavigateNextIcon fontSize='small' />}

                    >
                        <Link underline='none' href='#' color='text.secondary'>Admin</Link>

                        <Typography color='text.primary' fontWeight='Medium'>Dashboard</Typography>
                    </Breadcrumbs>

                </Box>

                <img src='/images/logout.svg' className='mr-3' />

            </div>
            <div className='mt-[78px] flex gap-[38px]'>
                <ChartOne />
                <ChartLine />
                <ChartThree />

            </div>

            <div className='mt-10 flex gap-[38px]'>
                <div className='w-[328px] h-[475px] border-[1px] bg-white rounded-lg pt-8 '>
                    <div className='pb-6 border-b-[1px]'>
                        <h2 className="font-semibold text-base text-[#1C1D22] ml-8">Best Selling</h2>
                        <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px] ml-8">THIS MONTH</h3>
                    </div>

                    <div className='flex items-center mt-[34px] ml-8 gap-2'>
                        <h2 className="font-bold text-2xl text-[#1C1D22]">$2,400</h2>
                        <span className="font-medium text-[12px] text-[#5C5F6A]">  —  Total Sales</span>
                    </div>
                    <div className='flex justify-center items-center w-[270px] h-7 border-[1px] rounded-[100px] ml-8 mt-6'>
                        <h3 className='font-medium text-[12px] text-[#5C5F6A]'>Classic Monochrome Tees —  </h3>
                        <span className='font-medium text-[12px] text-black'>$940 Sales</span>
                    </div>
                    <div className='flex justify-center items-center w-[267px] h-7 border-[1px] rounded-[100px] ml-8 mt-3'>
                        <h3 className='font-medium text-[12px] text-[#5C5F6A]'>Monochromatic Wardrobe —  </h3>
                        <span className='font-medium text-[12px] text-black'>$790 Sales</span>
                    </div>
                    <div className='flex justify-center items-center w-[221px] h-7 border-[1px] rounded-[100px] ml-8 mt-3'>
                        <h3 className='font-medium text-[12px] text-[#5C5F6A]'>Essential Neutrals —  </h3>
                        <span className='font-medium text-[12px] text-black'>$740 Sales</span>
                    </div>

                    <img src='/images/doughnut-chart.png' className='mt-8 ml-8' />

                </div>
                <div className='w-[695px] h-[475px] rounded-lg border-[1px] bg-white '>
                    <div className='flex mt-9 ml-10 gap-4'>
                        <h2 className='font-semibold text-base text-[#0E1422]'>Recent Orders</h2>
                        <button className='w-[78px] h-7 rounded-full bg-[#F6F6F6] font-medium text-[12px] text-[#5C5F6A]'>View All</button>
                    </div>

                    <table className=" w-[650px]  mt-4 ml-5">

                        <tr className='border-t-[1px] border-b-[1px]  text-[#5C5F6A] text-sm font-medium' >
                            <th className='flex justify-start py-4'>Item</th>
                            <th className='py-4'>Date</th>
                            <th className='py-4'>Total</th>
                            <th className='py-4'>Status</th>
                        </tr>
                        {tables.map((tables, index) => (
                            <tr className='border-b-[1px]  hover:bg-[#E9E9EB]' key={index} >

                                <td className='py-4'>{tables.item}</td>
                                <td className='py-4'>{tables.data}</td>
                                <td className='py-4'>{tables.total}</td>
                                <td className='py-4'>{tables.status}</td>

                            </tr>
                        ))}
                    </table>
                </div>

            </div >


        </div >
    )
}

export default Dashboard