import React from 'react'

const Password = () => {
    return (
        <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px] w-[534px]">
            <h1 className="font-semibold text-base text-[#0E1422]">Change Password</h1>
            <div className="flex flex-col mt-12">
                <label>New Password</label>
                <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
            </div>
            <div className="flex flex-col mt-4">
                <label>Confirm Password</label>
                <input className="border-[1px] w-[320px] h-11 rounded-md px-[15px] py-[10px]"></input>
            </div>
            <button className='w-36 h-11 rounded-[4px] bg-black text-white py-3 text-sm mt-16'>Change password</button>
        </div>
    )
}

export default Password