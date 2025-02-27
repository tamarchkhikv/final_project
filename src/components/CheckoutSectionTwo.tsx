import React from "react";
import { Link } from "react-router-dom";

const CheckoutSectionTwo = () => {
    return (
        <div className="max-w-[1116px] mx-auto flex justify-between mb-[183px]">
            <div>
                <h3 className="mt-[72px] font-semibold text-base text-[#0E1422]">Shipping Address</h3>
                <div className="mt-16">
                    <div className="flex flex-col">
                        <label className="font-medium text-sm text-[#474B57]">Street Address</label>
                        <input type='text' className="w-[534px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                    </div>
                    <div>
                        <div className="flex mt-[15px] gap-4" >
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">City</label>
                                <input type='text' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">State</label>
                                <input type='text' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                            </div>
                        </div>

                        <div className="flex mt-[15px] gap-4">
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">Zip Code</label>
                                <input type='number' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">Country</label>
                                <input type='text' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                            </div>
                        </div>

                        <div className="flex mt-[51px] gap-4">
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">Email</label>
                                <input type='email' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />

                            </div>
                            <div className="flex flex-col">
                                <label className="font-medium text-sm text-[#474B57]">Full name</label>
                                <input type='text' className="w-[259px] h-[45px] rounded-md border-[1px] border-[#E6E7E8] outline-none px-[15px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-l-[1px] w-[436px] pl-16">

                <h3 className="font-semibold text-base text-[#0E1422] mt-[72px]">Your Order</h3>

                <div className="flex justify-between mt-16">
                    <div className="flex gap-3">
                        <img src='/images/checkout-image1.png' alt="photo" />
                        <img src='/images/checkout-image2.png' alt="photo"/>
                        <img src='/images/checkout-image3.png' alt="photo"/>
                    </div>

                    <button className="px-6 py-3 rounded-[4px] border-[1px] border-[#B6B7BC] transform transition-transform duration-300 hover:scale-105">Edit Cart</button>
                </div>

                <div className="flex justify-between mt-16">
                    <h4 className="font-medium text-sm text-[#5C5F6A]">Subtotal</h4>
                    <span className="font-medium text-sm text-[#0E1422]" >$ 75.00</span>
                </div>
                <div className="flex justify-between mt-3">
                    <h4 className="font-medium text-sm text-[#5C5F6A]">Shipping: </h4>
                    <span className="font-medium text-sm text-[#0E1422]">Free</span>
                </div>
                <div className="flex justify-between my-3">
                    <h4 className="font-medium text-sm text-[#5C5F6A]">Tax: </h4>
                    <span className="font-medium text-sm text-[#0E1422]">$ 3.00</span>
                </div>

                <div className="flex justify-between py-6 border-t-[1px] mt-6">
                    <h4 className="font-medium text-sm text-[#0E1422]">Total</h4>
                    <span className="font-medium text-sm text-[#0E1422]">$ 78.00</span>
                </div>
                <Link to='/payment'>
                    <button className="w-[372px] h-[44px] py-3 bg-[#0E1422] text-white rounded-md mt-8 transform transition-transform duration-300 hover:scale-105">Place Order</button>
                </Link>



            </div>

        </div>
    )
}
export default CheckoutSectionTwo;