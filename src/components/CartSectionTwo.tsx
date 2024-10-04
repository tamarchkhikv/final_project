import React from "react";
import Counter from "./Counter";

const CartSectionTwo = () => {
    return (

        <div className="max-w-[1116px] mx-auto flex justify-between mb-[220px]">
            <div>
                <h3 className="mt-[72px] font-semibold text-base text-[#0E1422]">Your cart</h3>
                <div className="py-12 flex items-center">
                    <div>
                        <div className="flex items-center">
                            <img src='/images/cartimage1.png' />
                            <div className="ml-8 mt-2">
                                <h2 className="font-medium text-sm text-[#0E1422]">Raw Black T-Shirt Lineup</h2>
                                <div className="flex items-center gap-[6px] mt-[6px]">

                                    <span className="font-medium text-[12px] text-[#5C5F6A]">Color:</span>
                                    <img src="/images/circlegreen.png" className="w-3 h-3" />
                                    <div className="w-3 h-6 flex items-center">
                                        <img src='/images/line.png' />

                                    </div>

                                    <span className="font-medium text-[12px] text-[#5C5F6A]">Size: M</span>
                                </div>

                            </div>
                            <h3 className="ml-[106px] text-sm text-[#0E1422] font-medium">$75.00</h3>
                            <Counter/>
                            <img src='/images/remove.png'className="ml-4"/>
                        
                        
                        </div>


                        <div className="flex items-center mt-10">
                            <img src='/images/cartimage2.png' />
                            <div className="ml-8 mt-2">
                                <h2 className="font-medium text-sm text-[#0E1422]">Essential Neutrals</h2>
                                <div className="flex items-center gap-[6px] mt-[6px]">

                                    <span className="font-medium text-[12px] text-[#5C5F6A]">Color:</span>
                                    <img src="/images/circleblue.png" className="w-3 h-3" />
                                    <div className="w-3 h-6 flex items-center">
                                        <img src='/images/line.png' />

                                    </div>

                                    <span className="font-medium text-[12px] text-[#5C5F6A]">Size: M</span>
                                </div>
                            </div>
                            <h3 className="ml-[152px] text-sm text-[#0E1422] font-medium">$22.00</h3>
                            <Counter/>
                            <img src='/images/remove.png'className="ml-4"/>
                        </div>
                    </div>



                </div>
            </div>

            <div className="w-[341px] h-[430px] border-[1px] border-[#E6E7E8] rounded-md mt-14 px-6">
                <h1 className="font-semibold text-base text-[#0E1422] mt-8">Order Summary</h1>
                <div className="py-6 mt-4 border-b-[1px]">
                    <div className="flex justify-between">
                        <h4 className="font-medium text-sm text-[#5C5F6A]">Subtotal</h4>
                        <span className="font-medium text-sm text-[#0E1422]" >$ 90.00</span>
                    </div>
                    <div className="flex justify-between mt-3">
                        <h4 className="font-medium text-sm text-[#5C5F6A]">Shipping: </h4>
                        <span className="font-medium text-sm text-[#0E1422]">Free</span>
                    </div>
                    <div className="flex justify-between my-3">
                        <h4 className="font-medium text-sm text-[#5C5F6A]">Tax: </h4>
                        <span className="font-medium text-sm text-[#0E1422]">$ 3.00</span>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <h4 className="font-medium text-sm text-[#0E1422]">Total</h4>
                    <span className="font-medium text-sm text-[#0E1422]">$ 100.00</span>
                </div>

                <button className="w-[296px] h-[44px] py-3 bg-[#0E1422] text-white rounded-md mt-8">Checkout</button>
                <div className="text-center mt-8 font-medium text-[12px] underline underline-offset-4 text-[#0E1422]">
                    <a href="#">Continue Shopping</a>
                </div>



            </div>
        </div>

    )
}
export default CartSectionTwo;