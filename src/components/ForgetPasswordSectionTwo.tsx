import React from "react";
import GoogleButton from "./GoogleButton";

const ForgetPasswordSectionTwo = () => {
    return (
        <div className="flex justify-center mt-36 mb-[148px]">
            <div className=" w-[320px]">
                <p className="font-normal text-sm text-[#474B57]">Please enter the email address associated with your account. We'll promptly send you a link to reset your password.</p>


                <div className="flex flex-col mt-6">
                    <label>Email</label>
                    <input type='email' className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>



                <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-6 text-sm  hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105">Send reset link</button>
            </div>







        </div>

    )
}
export default ForgetPasswordSectionTwo;