import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from "react"
const DropDown = () => {


  return (
    <Menu>
      <MenuButton className='flex gap-2'>
        <h3 className='font-medium text-sm text-[#5C5F6A]'>Authentication</h3>
        <img src='/images/drop-down.png' />
      </MenuButton>
      <MenuItems anchor="bottom">
        <div className='border-[1px] px-2 py-1 bg-gray-100'>
          <MenuItem >

            <a className="block data-[focus]:bg-gray-200 w-[140px]" href="login">
              Login
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-gray-200 w-[140px]" href="/signup">
              Sign Up
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-gray-200 w-[140px]" href="/forgotpassword">
              Forgot Password
            </a>

          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-gray-200 w-[140px]" href="/resetpassword">
              Reset Password
            </a>

          </MenuItem>
        </div>
      </MenuItems>
    </Menu >
  )
}


export default DropDown;




