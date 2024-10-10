import React from "react";


const ResetPasswordSectionTwo= () => {
    return (
        <div className="flex justify-center mt-32 mb-[148px]">
            <div className="w-[320px]">
               
                <div className="flex flex-col">
                    <label>New password</label>
                    <input type='email'className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>
                <div className="flex flex-col mt-4">
                    <label>Confirm password</label>
                    <input type='email' className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                </div>

                

                <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-10 text-sm">Reset password</button>

               

            </div>

        </div>

    )
}
export default ResetPasswordSectionTwo;