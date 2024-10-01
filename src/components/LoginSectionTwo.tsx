import React from "react";
import GoogleButton from "./GoogleButton";

const LoginSectionTwo = () => {
    return (
        <div className="flex justify-center mt-32 mb-[148px]">
            <div className="w-[320px]">
                <GoogleButton />
                <div className="flex items-center mt-8 gap-4">
                    <hr className="w-[136px]"></hr>

                    <span className="font-medium text-[12px] text-[#5C5F6A]">OR</span>
                    <hr className="w-[135px]"></hr>


                </div>

                <div className="flex flex-col mt-[34px]">
                    <label>Email</label>
                    <input className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8]"></input>
                </div>
                <div className="flex flex-col mt-[15px]">
                    <label>Password</label>
                    <input className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8]"></input>
                </div>

                <a className= "flex justify-end mt-4 font-medium text-[#555555] text-[12px]">Forgot Password?</a>

                <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-6 text-sm">Login</button>

                <a className="font-normal text-sm text-[#5C5F6A] flex justify-center mt-6">Don't have an account? Sign up</a>

               

            </div>

        </div>

    )
}
export default LoginSectionTwo;