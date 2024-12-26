import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


const DropDown = () => {

  const [apiData, setApiData] = useState([])


  const getData = async () => {

    try {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data: any = await res.json();

      setApiData(data);

    } catch (error) {
      console.error(error);
     
    }
    
  }


    useEffect(() => {
      getData()
    
    }, [])

    
  


  return (
    <Menu>
      <MenuButton className='flex gap-2 hover:underline underline-offset-4'>
        <h3 className='font-medium text-sm text-[#5C5F6A]'>Categories</h3>
        <img src='/images/drop-down.png' />
      </MenuButton>
      <MenuItems anchor="bottom">
        <div className='border-[2px] px-2 py-1 bg-white rounded-md '>
          {apiData.map(
            (item, index) => (

              <MenuItem key={index}>

                <Link to ={`/listing/${item}`}
                className="block data-[focus]:bg-gray-100 py-2 px-2 w-40 rounded" >
                  {item}
                </Link>

              </MenuItem>
            ))}

        </div>
      </MenuItems>
    </Menu >
  )

}


export default DropDown;




