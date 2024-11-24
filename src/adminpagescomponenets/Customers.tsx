import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Customers = () => {

  const tables = [
    {
      img: "/images/avatar-1.png",
      name: "Esther Howard",
      email: 'esther.howard@gmail.com',
      address: "8642 Yule Street, Arvada CO 80007",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-2.png",
      name: "Wade Warren",
      email: 'wade.warren@gmail.com',
      address: "5331 Rexford Court, Montgomery AL 36116",
      action: "/images/more.svg"

    },

    {
      img: "/images/avatar-3.png",
      name: "Brooklyn Simmons",
      email: 'brooklyn.simmons@gmail.com',
      address: "2325 Eastridge Circle, Moore OK 73160",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-4.png",
      name: "Robert Fox",
      email: 'robert.fox@gmail.com',
      address: "2436 Naples Avenue, Panama City FL 32405",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-5.png",
      name: "Dianne Russell",
      email: "dianne.russell@gmail.com",
      address: "6095 Terry Lane, Golden CO 80403",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-6.png",
      name: "Ralph Edwards",
      email: "ralph.edwards@gmail.com",
      address: "4001 Anderson Road, Nashville TN 37217",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-7.png",
      name: "Theresa Webb",
      email: "theresa.webb@gmail.com",
      address: "19141 Pine Ridge Circle, Anchorage AK 99516",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-8.png",
      name: "Arlene McCoy",
      email: "arlene.mccoy@gmail.com",
      address: "2613 Cottonwood Street, Anchorage AK 99508",
      action: "/images/more.svg"

    },




  ];
  return (

    <div>
      <div className='flex items-center justify-between py-[22px] ml-12'>
        <Box >
          <Breadcrumbs
            aria-label='breadcrumbs'
            separator={<NavigateNextIcon fontSize='small' />}

          >
            <Link underline='none' href='#' color='text.secondary'>Admin</Link>

            <Typography color='text.primary' fontWeight='Medium'>Customers</Typography>
          </Breadcrumbs>

        </Box>

        <img src='/images/logout.svg' className='mr-3' />
      </div>
      <div className=' max-w-[1069px] h-[922px] mx-auto bg-white mt-16 pt-6 rounded'>
        <div className='flex justify-between items-center px-12 '>
          <h2 className='font-medium text-[18px]'>Customers</h2>


          <div className='flex items-center w-[242px] h-10 rounded-md border-[1px] gap-2 transform transition-transform duration-300 hover:scale-105'>
            <img src='/images/search.png' className='w-6 h-6 ml-[15px]' />
            <input placeholder='Search customers' className='w-[140px] outline-none'></input>
          </div>

        </div>

        <table className='mt-6 w-[1069px]'>

          <tr className='border-t-[1px] border-b-[1px]  text-[#5C5F6A] text-sm font-medium h-11 text-left' >
            <th>
              <img src='/images/sort.svg' className='ml-[61px]' />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Shipping Address</th>
            <th>Action</th>

          </tr>


          {tables.map((tables, index) => (

            <tr key={index} className='border-b-[1px] h-20 hover:bg-[#E9E9EB] text-sm font-medium text-[#717171] ' >

              <td >
                <img src={tables.img} className='w-12 h-12 ml-12' /></td>
              <td >{tables.name}</td>
              <td >{tables.email}</td>
              <td>{tables.address}</td>
              <td >
                <img src={tables.action} />
              </td>

            </tr>


          ))}

        </table>
        <div className='flex justify-end pt-[34px]  mr-8'>
          <Stack spacing={2}>
            <MuiPagination count={24} shape="rounded" />

          </Stack>
        </div>

      </div>

    </div>
  )

}

export default Customers;