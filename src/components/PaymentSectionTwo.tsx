import React from "react";

const PaymentSectionTwo = () => {
    return (
        <div className="flex justify-center items-center h-[703px] ">
            <div>
                <img src='/images/illustration.png' className="mx-auto" alt="photo"/>

                <h2 className="font-bold text-2xl text-[#0E1422] text-center mt-5">Thank you for shopping</h2>
                <p className="w-[379px] font-normal text-sm text-[#5C5F6A] text-center mt-4">Your order has been successfully
                    placed and is now being processed.</p>

                <div className="mt-[48px] mx-auto bg-[#0E1422] w-[196px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md">
                    <a href='profile'>
                    <button>Go to my account</button>
                    </a>
                    <img src='/images/arrow-right.png' className="w-6 h-6" alt="photo"/>
                </div>
            </div>
        </div>
    )
}
export default PaymentSectionTwo;