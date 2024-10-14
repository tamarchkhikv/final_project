import React from 'react'
import { useState } from 'react'

const Orders = () => {
    const productArray: any = [
        {
            img: '/images/cartimage1.png',
            title: 'Raw Black T-Shirt Lineup',
            order_time: 'Ordered on: 27 July 2023',
            price: '$70.00'
        },
        {
            img: '/images/cartimage2.png',
            title: 'Raw Black T-Shirt Lineup',
            order_time: 'Ordered on: 27 July 2023',
            price: '$70.00'
        }
    ]




    return (


        <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px]">

            <h2 className="font-semibold text-base text-[#0E1422]">Orders</h2>
            <div className='mt-6'>
                {productArray.map((product: any, key: any) => (

                    <div className="flex items-center py-8 border-b-[1px]">
                        <img src={product.img} />
                        <div className="ml-8 ">
                            <h2 className="font-medium text-sm text-[#0E1422]">{product.title}</h2>
                            <h4 className="font-medium text-[12px] text-[#5C5F6A]">{product.order_time}</h4>
                            <span className="font-medium text-[12px] text-[#0E1422]">{product.price}</span>


                        </div>
                        <div className="border-b-[1px] border-[#0E1422] ml-[116px]">
                            <span>Processing</span>
                        </div>

                        <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">View item</button>
                    </div>


                ))}
            </div>






            {
                productArray.length === 0 &&
                <div className=" pt-16 pb-[131px]">
                    <div className="w-[273px] h-[181px] ml-[280px] mt-[135px]">
                        <img src='/images/empty-state.svg' className="w-16 h-16 mx-auto" />
                        <h4 className="font-normal text-sm text-[#5C5F6A] text-center">Your order history is waiting to be filled.</h4>
                        <div className="mt-6 bg-[#0E1422] w-[179px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md mx-auto">
                            <button>Start Shopping</button>
                            <img src='/images/arrow-right.png' className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            }

        </div >


    )
}

export default Orders