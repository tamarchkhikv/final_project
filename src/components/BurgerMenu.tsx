import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from "react"
const DropDown = () => {


    return (
        <div>
        <Menu>
            <MenuButton className='flex gap-2'>
                <img src='/images/menu.svg' alt="photo" />
            </MenuButton>
            <MenuItems anchor="bottom">
                <div className='w-[500px] border-[1px] px-2 py-1 bg-gray-100'>
                    <MenuItem>
                        <a className="block data-[focus]:bg-gray-200 w-[140px]" href='/' >Home</a>
                    </MenuItem>


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

                    <MenuItem>
                        <a className="block data-[focus]:bg-gray-200 w-[140px]" href='/listing' >Listing</a>
                    </MenuItem>

                    <MenuItem>
                        <a className="block data-[focus]:bg-gray-200 w-[140px]" href='/checkout' >Checkout</a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu >
        </div>
    )
}


export default DropDown;




