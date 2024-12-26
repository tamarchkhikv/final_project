import React from "react";
import { Link } from "react-router-dom";

const PaymentSectionTwo = () => {
    return (
        <div className="flex justify-center items-center h-[703px] ">
            <div>
                <img src='/images/illustration.png' className="mx-auto" alt="photo" />

                <h2 className="font-bold text-2xl text-[#0E1422] text-center mt-5">Thank you for shopping</h2>
                <p className="w-[379px] font-normal text-sm text-[#5C5F6A] text-center mt-4">Your order has been successfully
                    placed and is now being processed.</p>


                <Link to='/profile'
                    className="mt-[48px] mx-auto rounded bg-[#0E1422] w-[196px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-mdtransform transition-transform duration-300 hover:scale-105">Go to my account
                    <img src='/images/arrow-right.png' className="w-6 h-6" alt="photo" />
                </Link>

            </div>
        </div>
    )
}
export default PaymentSectionTwo;