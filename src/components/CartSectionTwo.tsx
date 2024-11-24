import React from "react";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const CartSectionTwo = () => {
    const cart = useSelector((state: any) => state.cart)
    
    return (
        <div>
            {cart.products.length > 0 ?
                <div className="max-w-[1116px] mx-auto flex justify-between mb-[220px]">
                    <div>
                        <h3 className="mt-[72px] font-semibold text-base text-[#0E1422]">Your cart</h3>
                        <div className="py-12 flex items-center">
                            <div>
                                {cart.products.map((product:any) => (
                                <div className="flex items-center">
                                    <img src='/images/image-7.png'className="w-[80px] h-[80px]"/>
                                    <div className="ml-8 mt-2">
                                        <h2 className="font-medium text-sm text-[#0E1422]">UTRAANET Black</h2>
                                        <div className="flex items-center gap-[6px] mt-[6px]">

                                            <span className="font-medium text-[12px] text-[#5C5F6A]">Color:</span>
                                            <img src="/images/circlegreen.png" className="w-3 h-3" />
                                            <div className="w-3 h-6 flex items-center">
                                                <img src='/images/line.png' />

                                            </div>

                                            <span className="font-medium text-[12px] text-[#5C5F6A]">Size: M</span>
                                        </div>

                                    </div>
                                    <h3 className="ml-[106px] text-sm text-[#0E1422] font-medium">{product.price}</h3>
                                    <Counter />
                                    <img src='/images/remove.png' className="ml-4" />


                                </div>
                                ))}


                            
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
                        <a href='checkout'>
                            <button className="w-[296px] h-[44px] py-3 bg-[#0E1422] text-white rounded-md mt-8 transform transition-transform duration-300 hover:scale-105">Checkout</button>
                        </a>
                        <div className="text-center mt-8 font-medium text-[12px] underline underline-offset-4 text-[#0E1422] hover:text-gray-500">
                            <a href="listing">Continue Shopping</a>
                        </div>



                    </div>
                </div>
                : <div className="m-28">
                     <div className="w-[273px] h-[181px] ml-[280px] mt-[135px]">
                        <img src='/images/empty-state.svg' className="w-16 h-16 mx-auto" />
                        <h4 className="font-normal text-sm text-[#5C5F6A] text-center">Your order history is waiting to be filled.</h4>
                        <div className="mt-6 bg-[#0E1422] w-[179px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md mx-auto hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105">
                            <button>Start Shopping</button>
                            <img src='/images/arrow-right.png' className="w-6 h-6" />
                        </div>
                    </div>
                </div>}
        </div>

    )
}
export default CartSectionTwo;