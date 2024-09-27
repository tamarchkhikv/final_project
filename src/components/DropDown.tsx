import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function DropDown() {
  return (
    <Menu>
      <MenuButton className='flex gap-2'>
        <h3 className='font-medium text-sm text-[#5C5F6A]'>Categories</h3>
        <img src='/images/drop-down.png'/>
      </MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
export default DropDown;



