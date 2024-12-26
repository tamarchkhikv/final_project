import React from "react";
import { useState } from "react";

const ForgetPasswordSectionTwo = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e: any) => {

        setIsLoading(true);
        
    }

    return (
        <form onSubmit={onSubmitForm} className="flex justify-center mt-36 mb-[148px]">
            <div className=" w-[320px]">
                <p className="font-normal text-sm text-[#474B57]">Please enter the email address associated with your account. We'll promptly send you a link to reset your password.</p>


                <div className="flex flex-col mt-6">
                    <label>Email</label>
                    <input required type='email' className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>



                <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-6 text-sm  hover:bg-gray-700 
                transform transition-transform duration-300 hover:scale-105">
                    {isLoading ? 'loading...' : 'Send reset link'}</button>
            </div>

        </form>

    )
}
export default ForgetPasswordSectionTwo;