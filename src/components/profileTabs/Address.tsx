import React from 'react'

const Address = () => {
    return (
        <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px] w-[534px]">
            <h1 className="font-semibold text-base text-[#0E1422]">Shipping Address</h1>
            <div className="mt-10">
                <label className="font-medium text-sm text-[#000000]">Street Address</label>
                <input className="w-[534px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
            </div>
            <div className="flex gap-4 mt-4">
                <div>
                    <label className="font-medium text-sm text-[#000000]">City</label>
                    <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                </div>
                <div>
                    <label className="font-medium text-sm text-[#000000]">State</label>
                    <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <div>
                    <label className="font-medium text-sm text-[#000000]">Zip Code</label>
                    <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                </div>
                <div>
                    <label className="font-medium text-sm text-[#000000]">Country</label>
                    <input className="w-[259px] h-11 border-[1px] rounded-md px-[15px] py-[10px]"></input>
                </div>
            </div>
            <button className='w-36 h-11 rounded-[4px] bg-black text-white py-3 text-sm mt-16'>Save Changes</button>
        </div>
    )
}

export default Address