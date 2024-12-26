import React from "react";
import { Link } from "react-router-dom";

const HomePageSectionThree = () => {
    return (
        <div className=" bg-[#F6F6F6]">
            <div data-aos="flip-left" className="max-w-[1116px] mx-auto flex justify-between">
                <div className="pt-[52px]">
                    <h2 className="font-bold text-[24px] text-[#0E1422]">Browse Our Fashion Paradise!</h2>
                    <p className="font-normal text-[14px] text-[#5C5F6A] mt-6 w-[462px]">Step into a world of style and explore our diverse collection of clothing categories.</p>

                    <Link className="mt-[48px] bg-[#0E1422] w-[183px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px]
                     hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105 rounded-md"
                     to='/listing'>
                        Start Browsing
                        <img src='/images/arrow-right.png' className="w-6 h-6" alt="photo"/>
                    </Link>


                </div>

                <img src="/images/category-image.png" className="w-[225px] h-[311px]" data-aos="flip-right" alt="photo"/>


            </div>
        </div>
    )
}

export default HomePageSectionThree;