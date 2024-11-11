import React, { useState } from "react";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'



const Header = () => {
    const [value, setValue] = useState<string>("");


    const navigate = useNavigate();

    const onChangeSearch = (e: any) => {
        setValue(e.target.value);

    }
    const onSubmit = (e: any) => {
        e.preventDefault();

        navigate(`/listing?search=${value}`);

    }

    const products = useSelector((state: any) => state.cart.products)
    return (

        <div className="flex items-center justify-between max-w-[1116px] mx-auto  border-b-[1px] py-5 bg-white">
            <Link to="/" className="flex items-center gap-2">
                <img src="/images/logomark.png" />
                <h2 className="font-extrabold text-xl text-[#0E1422] hover:text-gray-500">Ecommerce</h2>
            </Link>

            <nav className="flex gap-8 ">
                <Link to='/' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Home</Link>
                <DropDown />


                <Link to='/listing' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Listing</Link>
                <Link to='/login' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Login</Link>
            </nav>
            <div className="flex items-center gap-8 relative">
                <form onSubmit={onSubmit}
                    className="flex border-[1px] border-[#E6E7E8] gap-2 px-[15px] py-[10px] rounded-md transform transition-transform duration-300 hover:scale-105">
                    <img src='/images/search.png' className="w-6 h-6" />
                    <input type='text' placeholder="Search products" onChange={onChangeSearch} className="outline-none"></input>
                </form>
                <div className="flex gap-8">
                    <Link to='/cart'> {products.length > 0 && (
                        <span className="absolute top-2 text-xs w-3 h-3 right-12 rounded-full text-black border-[1px] border-black flex justify-center items-center">
                            {products.length}</span>
                    )}
                        <img src='/images/icon.svg' className="w-[24px] h-[24px] transform transition-transform duration-300 hover:scale-110" />
                    </Link>
                    <Link to='/profile'>
                        <img src='/images/user-1.svg' className="w-[26px] h-[26px] transform transition-transform duration-300 hover:scale-110" />
                    </Link>
                </div>
            </div>


        </div>


    )
}
export default Header;