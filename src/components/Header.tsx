import React from "react";
import DropDown from "./DropDown";
// import BurgerMenu from "./BurgerMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state:any) => state.cart.products)
    return (

        <div className="flex items-center justify-between max-w-[1116px] mx-auto  border-b-[1px] py-5 bg-white">
            <a className="flex items-center gap-2" href='/'>
                <img src="/images/logomark.png" />
                <h2 className="font-extrabold text-xl text-[#0E1422]">Ecommerce</h2>
            </a>
            {/* <BurgerMenu/> */}
            <nav className="flex gap-8 ">
                <a href='/' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Home</a>
                <DropDown />


                <a href='listing' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Listing</a>
                <a href='checkout' className="font-medium text-sm text-[#5C5F6A] hover:underline underline-offset-4">Checkout</a>
            </nav>
            <div className="flex items-center gap-8 relative">
                <form className="flex border-[1px] border-[#E6E7E8] gap-2 px-[15px] py-[10px] rounded-md transform transition-transform duration-300 hover:scale-105">
                    <img src='/images/search.png' className="w-6 h-6" />
                    <input type='text' placeholder="Search products" className="outline-none"></input>
                </form>
                <div className="flex gap-8">
                    <a href='cart'> {products.length > 0 && (
                        <span className="absolute top-2 text-xs w-3 h-3 right-12 rounded-full text-black border-[1px] border-black flex justify-center items-center">
                        {products.length}</span>
                    )}
                        <img src='/images/icon.png' className="w-[24px] h-[24px] transform transition-transform duration-300 hover:scale-110" />
                    </a>
                    <a href='profile'>
                        <img src='/images/user.png' className="w-[26px] h-[26px] transform transition-transform duration-300 hover:scale-110" />
                    </a>
                </div>
            </div>


        </div>


    )
}
export default Header;