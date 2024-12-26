import React from "react";
import { useState } from "react";

const ResetPasswordSectionTwo= () => {

     const [isLoading, setIsLoading] = useState(false)

     const onSubmitForm = (e: any) => {

        setIsLoading(true);
        
    }


    return (
        <form onSubmit={onSubmitForm} className="flex justify-center mt-32 mb-[148px]">
            <div className="w-[320px]">
               
                <div className="flex flex-col">
                    <label>New password</label>
                    <input required type='text'className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>
                <div className="flex flex-col mt-4">
                    <label>Confirm password</label>
                    <input required type='text' className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>

                

                <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-10 text-sm hover:bg-gray-700 
                transform transition-transform duration-300 hover:scale-105">
                {isLoading ? 'loading...' : 'Reset password'}</button>

               

            </div>

        </form>

    )
}
export default ResetPasswordSectionTwo;