import React from "react";

const WriteReviw = () => {
    return (

        <div className=" container  w-[424px] px-10 mt-12 mx-auto border-4 pt-8 pb-16">
            <div className="flex items-center justify-between border-b-[1px] pb-[19px] w-[344px]">
                <h1 className="font-semibold text-base text-[#0E1422]">Write Review</h1>
                <img src="/images/x.svg" />

            </div>

            <div className="mt-10 flex flex-col w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Email</label>
                <input className="border-[1px] h-[45px] rounded-md py-[10px] px-[15px]"></input>
            </div>


            <div className="mt-[15px] flex flex-col  w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Full name</label>
                <input className="border-[1px] h-[45px] rounded-md py-[10px] px-[15px]"></input>
            </div>

            <div className="mt-[23px] flex flex-col  w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Review</label>
                <textarea className="border-[1px] rounded-md py-[10px] px-[15px] h-32"></textarea>
            </div>

            <img src="/images/5star.svg" className="mt-6" />

            <button className="mt-12 bg-black  w-[344px] text-white  h-[44px] rounded-[4px]">Submit Your Review</button>


        </div>

    )
}
export default WriteReviw;