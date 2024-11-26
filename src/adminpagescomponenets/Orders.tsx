import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const tables = [
  {
    img: "/images/image-1.png",
    order: "Raw Black T-Shirt Lineup",
    date: '20 Mar, 2023',
    price: "$75.00",
    status: "Processing",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-2.png",
    order: "Classic Monochrome Tees",
    date: "19 Mar, 2023",
    price: "$35.00",
    status: "Processing",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-3.png",
    order: "Monochromatic Wardrobe",
    date: "7 Feb, 2023",
    price: "$27.00",
    status: "Completed",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-4.png",
    order: "Essential Neutrals",
    date: "29 Jan, 2023",
    price: "$22.00",
    status: "Completed",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-5.png",
    order: "UTRAANET Black",
    date: "27 Jan, 2023",
    price: "$43.00",
    status: "Processing",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-6.png",
    order: "Elegant Ebony Sweatshirts",
    date: "28 Dec, 2022",
    price: "$35.00",
    status: "Cancelled",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-7.png",
    order: "Sleek and Cozy Black",
    date: '4 Jan, 2023',
    price: "$22.00",
    status: "Completed",
    action: "/images/more.svg"

  },
  {
    img: "/images/image-8.png",
    order: "MOCKUP Black",
    date: "4 Jan, 2023",
    price: "$30.00",
    status: "Processing",
    action: "/images/more.svg"

  },

];

const Orders = () => {






  return (

    <div>
      <div className='flex items-center justify-between py-[22px] ml-12'>
        <Box >
          <Breadcrumbs
            aria-label='breadcrumbs'
            separator={<NavigateNextIcon fontSize='small' />}

          >
            <Link underline='none' href='#' color='text.secondary'>Admin</Link>

            <Typography color='text.primary' fontWeight='Medium'>Orders</Typography>
          </Breadcrumbs>

        </Box>

        <img src='/images/logout.svg' className='mr-3' alt="photo" />
      </div>
      <div className=' max-w-[1069px] mx-auto h-[922px] bg-white mt-16 pt-6 rounded'>
        <div className='flex justify-between items-center px-12 '>
          <h2 className='font-medium text-[18px]'>Orders</h2>


          <div className='flex items-center w-[242px] h-10 rounded-md border-[1px] gap-2 transform transition-transform duration-300 hover:scale-105'>
            <img src='/images/search.png' className='w-6 h-6 ml-[15px]' alt="photo"/>
            <input placeholder='Search orders' className='w-[130px] outline-none'></input>
          </div>

        </div>

        <table className='mt-6 w-[1069px]'>

          <tr className='border-t-[1px] border-b-[1px]  text-[#5C5F6A] text-sm font-medium h-11 text-left' >
            <th>
              <img src='/images/sort.svg' className='ml-[61px]' alt="photo" />
            </th>
            <th>Order</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>

          </tr>


          {tables.map((tables, index) => (

            <tr key={index} className='border-b-[1px] h-20 hover:bg-[#E9E9EB] text-sm font-medium text-[#717171]' >

              <td >
                <img src={tables.img} className='w-12 h-12 ml-12' alt="photo" /></td>
              <td >{tables.order}</td>
              <td >{tables.date}</td>
              <td>{tables.price}</td>
              <td >{tables.status}</td>
              <td >
                <img src={tables.action} />
              </td>

            </tr>


          ))}

        </table>
        <div className='flex justify-end pt-[34px] mr-8'>
          <Stack spacing={2}>
            <MuiPagination count={24} shape="rounded" />

          </Stack>
        </div>

      </div>

    </div>

  )
}

export default Orders;