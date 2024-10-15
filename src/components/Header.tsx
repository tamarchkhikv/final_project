import React from "react";
import DropDown from "./DropDown";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    return (
        <div className="flex items-center justify-between max-w-[1116px] mx-auto  border-b-[1px] py-5">
            <a className="flex items-center gap-2" href='/'>
                <img src="/images/logomark.png" />
                <h2 className="font-extrabold text-xl text-[#0E1422]">Ecommerce</h2>
            </a>
            <BurgerMenu/>
            <nav className="flex gap-8 ">
                <a href='/' className="font-medium text-sm text-[#5C5F6A]">Home</a>
                <DropDown />


                <a href='listing' className="font-medium text-sm text-[#5C5F6A]">Listing</a>
                <a href='checkout' className="font-medium text-sm text-[#5C5F6A]">Checkout</a>
            </nav>
            <div className="flex items-center gap-8">
                <div className="flex border-[1px] border-[#E6E7E8] gap-2 px-[15px] py-[10px] rounded-md">
                    <img src='/images/search.png' className="w-6 h-6" />
                    <input type='text' placeholder="Search products" className="outline-none"></input>
                </div>
                <div className="flex gap-8">
                    <a href='cart'>
                        <img src='/images/icon.png' className="w-[24px] h-[24px]" />
                    </a>
                    <a href='profile'>
                        <img src='/images/user.png' className="w-[26px] h-[26px]" />
                    </a>
                </div>
            </div>


        </div>

    )
}
export default Header;