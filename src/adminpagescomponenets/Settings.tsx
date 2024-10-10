import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Settings = () => {
  return (
    <div>
      <div className='flex items-center justify-between  ml-12 py-[22px]'>
        <Box >
          <Breadcrumbs
            aria-label='breadcrumbs'
            separator={<NavigateNextIcon fontSize='small' />}

          >
            <Link underline='none' href='#' color='text.secondary'>Admin</Link>

            <Typography color='text.primary' fontWeight='Medium'>Settings</Typography>
          </Breadcrumbs>

        </Box>

        <img src='/images/logout.svg' className='mr-3' />
      </div>
      <div className='max-w-[1069px] mx-auto bg-white mt-16 py-8 border-b-[1px] ml-12 h-[588px] '>
        <h1 className='font-medium text-[18px] ml-12'>Settings</h1>

        <div className=' flex flex-col w-80 h-[239px] ml-12 gap-4 mt-16'>
          <div>
            <label className='font-medium text-sm text-[#474B57]'>Site Name</label>
            <input type='text'className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
          </div>
          <div>
            <label className='font-medium text-sm text-[#474B57]'>Support Email</label>
            <input type='email' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
          </div>
          <div>
            <label className='font-medium text-sm text-[#474B57]'>Monthly Order Goal</label>
            <input type='text' className='w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
          </div>

        </div>

        <button className='bg-black text-white w-[144px] h-11 py-3 px-6 rounded-[4px] text-sm mt-[74px] ml-12' >Save Changes</button>

      </div>
    </div>
  )
}

export default Settings