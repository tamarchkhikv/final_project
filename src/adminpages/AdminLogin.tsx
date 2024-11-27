import React from "react";

const AdminLogin = () => {
    return (
        <form className="flex justify-center">
            <div className="mt-20 border-[1px] p-8">
                <img src="/images/adminlogo.svg" className="mx-auto" alt="photo"/>
                <div className="flex flex-col mt-[72px]">
                    <label className="font-medium text-sm text-[#474B57]">Email</label>
                    <input required type="email" className="w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none"></input>
                </div>

                <div className="flex flex-col mt-[15px]">
                    <label className="font-medium text-sm text-[#474B57]">Password</label>
                    <input required type="email" className="w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none"></input>
                </div>

                <button className="mt-10 w-[318px] h-11 rounded-[4px] bg-black text-white transform transition-transform duration-300 hover:scale-105">Login</button>
            </div>
        </form>

    )
}

export default AdminLogin;