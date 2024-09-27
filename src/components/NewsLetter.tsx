import React from "react";
const NewsLetter = () => {

    return (
        <div className=" bg-[#F6F6F6]">
            <div className="max-w-[1116px] mx-auto flex justify-between py-[59px]">
                <div>
                    <h2 className="font-bold text-2xl text-[#0E1422]">Join Our Newsletter</h2>
                    <p className="font-normal text-[14px] text-[#5C5F6A] mt-6">We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div>
                    <input placeholder="Your email address" type="email" className="py-[10px] px-[15px] rounded-md  bg-[#F6F6F6]  border-[#E6E7E8] border-[1px]"></input>
                    <button className="ml-4 px-6 py-3 bg-[#0E1422] text-white rounded-md">Subscribe</button>
                </div>

            </div>
        </div>

    )
}
export default NewsLetter;