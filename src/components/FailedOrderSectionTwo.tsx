import React from "react";

const FailedOrderSectionTwo = () => {
    return (
        <div className="flex justify-center items-center h-[703px] ">
            <div>
                <img src='/images/illustration2.png' className="mx-auto" alt="photo"/>

                <h2 className="font-bold text-2xl text-[#0E1422] text-center mt-5">Oops! There was an issue</h2>
                <p className="w-[379px] font-normal text-sm text-[#5C5F6A] text-center mt-4">Oops! There was a problem processing your order. Please review the details and try again.</p>

                <div className="mt-[48px] mx-auto bg-[#0E1422] w-[132px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md">
                    <button>Reorder</button>
                    <img src='/images/arrow-right.png' className="w-6 h-6" alt="photo" />
                </div>
            </div>
        </div>
    )
}
export default FailedOrderSectionTwo;