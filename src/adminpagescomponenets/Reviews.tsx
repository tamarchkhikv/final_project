import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Reviews = () => {
  const tables = [
    {
      img: "/images/avatar-1.png",
      name: "Esther Howard",
      review: 'Completed the task and added the required documentation, can someone please ....',
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-2.png",
      name: "Wade Warren",
      review: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.',
      action: "/images/more.svg"

    },

    {
      img: "/images/avatar-3.png",
      name: "Brooklyn Simmons",
      review: 'Twenty 30-second applications within half an hour is well in excess.',
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-4.png",
      name: "Robert Fox",
      review: 'An interesting implication of the 2007 study concerns the use of hand sanitizers.',
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-5.png",
      name: "Dianne Russell",
      review: "I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-6.png",
      name: "Ralph Edwards",
      review: "The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ",
      action: "/images/more.svg"
    },

    {
      img: "/images/avatar-7.png",
      name: "Theresa Webb",
      review: "Alcohol based exposures through inadvertently consuming hand sanitize",
      action: "/images/more.svg"

    },
    {
      img: "/images/avatar-8.png",
      name: "Arlene McCoy",
      review: "I'm grateful for the supportive work environment during personal challenges.",
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

            <Typography color='text.primary' fontWeight='Medium'>Reviews</Typography>
          </Breadcrumbs>

        </Box>

        <img src='/images/logout.svg' className='mr-3' />
      </div>
      <div className=' max-w-[1069px] mx-auto h-[922px] bg-white mt-16 pt-6 rounded'>
        <div className='flex justify-between items-center px-12 '>
          <h2 className='font-medium text-[18px]'>Reviews</h2>


          <div className='flex items-center w-[242px] h-10 rounded-md border-[1px] gap-2 transform transition-transform duration-300 hover:scale-105'>
            <img src='/images/search.png' className='w-6 h-6 ml-[15px]' />
            <input placeholder='Search reviews' className='w-[130px] outline-none'></input>
          </div>

        </div>

        <table className='mt-6 w-[1069px]'>

          <tr className='border-t-[1px] border-b-[1px]  text-[#5C5F6A] text-sm font-medium h-11 text-left' >
            <th>
              <img src='/images/sort.svg' className='ml-[61px]' />
            </th>
            <th>Name</th>
            <th>Review</th>
            <th>Action</th>

          </tr>


          {tables.map((tables, index) => (

            <tr key={index} className='border-b-[1px] h-20 hover:bg-[#E9E9EB] text-sm font-medium text-[#717171] ' >

              <td >
                <img src={tables.img} className='w-12 h-12 ml-12' /></td>
              <td >{tables.name}</td>
              <td >{tables.review}</td>
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

export default Reviews