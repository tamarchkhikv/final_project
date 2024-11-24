import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const AdminProducts = () => {
  const tables = [
    {
      img: "/images/image-1.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$75.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-2.png",
      name: "Classic Monochrome Tees",
      sku: 47514501,
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-3.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$27.00",
      stock: "In Stock",
      categories: "T-shirt",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-4.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Raw",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-5.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$43.00",
      stock: "In Stock",
      categories: "T-shirt, Trend",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-6.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-7.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$57.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      action: "/images/more.svg"

    },
    {
      img: "/images/image-8.png",
      name: "Raw Black T-Shirt Lineup",
      sku: 47514501,
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
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

            <Typography color='text.primary' fontWeight='Medium'>Products</Typography>
          </Breadcrumbs>

        </Box>

        <img src='/images/logout.svg' className='mr-3' />
      </div>
      <div className=' max-w-[1069px] mx-auto h-[922px] bg-white mt-16 pt-6 rounded'>
        <div className='flex justify-between items-center px-12 '>
          <h2 className='font-medium text-[18px]'>Products</h2>
          <div className='flex gap-4'>
            <a href='/addproductsPage'>
              <button className='bg-[#0E1422] px-5 text-white  h-10 rounded transform transition-transform duration-300 hover:scale-105'>Add product</button>
            </a>
            <div className='flex items-center w-[242px] h-10 rounded-md border-[1px] gap-2 transform transition-transform duration-300 hover:scale-105'>
              <img src='/images/search.png' className='w-6 h-6 ml-[15px]' />
              <input placeholder='Search products' className='w-[130px] outline-none'></input>
            </div>
          </div>
        </div>

        <table className='mt-6 w-[1069px]'>

          <tr className='border-t-[1px] border-b-[1px]  text-[#5C5F6A] text-sm font-medium h-11 text-left' >
            <th>
              <img src='/images/sort.svg' className='ml-[61px]' />
            </th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Categories</th>
            <th>Action</th>

          </tr>


          {tables.map((tables, index) => (

            <tr key={index} className='border-b-[1px] h-20 hover:bg-[#E9E9EB] text-sm font-medium text-[#717171] ' >

              <td >
                <img src={tables.img} className='w-12 h-12 ml-12' /></td>
              <td >{tables.name}</td>
              <td >{tables.sku}</td>
              <td>{tables.price}</td>
              <td >{tables.stock}</td>
              <td >{tables.categories}</td>
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

export default AdminProducts;