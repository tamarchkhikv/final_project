import React from "react";
import DropDown from "./DropDown";

const Header = () => {
    return (
        <div className="flex items-center justify-between max-w-[1116px] mx-auto  border-b-[1px] py-5">
            <div className="flex items-center gap-2">
                <img src="/images/logomark.png" />
                <h2 className="font-extrabold text-xl text-[#0E1422]">Ecommerce</h2>
            </div>

            <nav className="flex gap-8 ">
                <a href='/' className="font-medium text-sm text-[#5C5F6A]">Home</a>
                <DropDown/>


                <a href='/' className="font-medium text-sm text-[#5C5F6A]">About</a>
                <a href='/' className="font-medium text-sm text-[#5C5F6A]">Contact</a>
            </nav>
            <div className="flex items-center gap-8">
                <div className="flex border-[1px] border-[#E6E7E8] gap-2 px-[15px] py-[10px] rounded-md">
                    <img src='/images/search.png' className="w-6 h-6" />
                    <input type='text' placeholder="Search products"></input>
                </div>
                <div className="flex gap-8">
                    <img src='/images/icon.png'className="w-[24px] h-[24px]" />
                    <img src='/images/user.png'className="w-[26px] h-[26px]" />
                </div>
            </div>


        </div>

    )
}
export default Header;