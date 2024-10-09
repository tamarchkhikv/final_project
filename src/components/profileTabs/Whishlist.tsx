import React from 'react'

const Whishlist = () => {
    return (
        <div className="px-12 h-[504px] border-l-[1px] mt-16 mb-[131px]">
            <h2 className="font-semibold text-base text-[#0E1422]">Wishlist</h2>
            <div className="flex items-center mt-14 pb-8 border-b-[1px]">
                <img src='/images/cartimage1.png' />
                <div className="ml-8 ">
                    <h2 className="font-medium text-sm text-[#0E1422]">Raw Black T-Shirt Lineup</h2>
                    <h4 className="font-medium text-[12px] text-[#5C5F6A]">Ordered on: 27 July 2023</h4>
                    <span className="font-medium text-[12px] text-[#0E1422]">Remove item</span>


                </div>
                <h3 className="ml-[134px] font-medium text-sm text-[#0E1422]">$75.00</h3>

                <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">Add to cart</button>
            </div>

            <div className="flex items-center mt-8">
                <img src='/images/cartimage2.png' />
                <div className="ml-8 ">
                    <h2 className="font-medium text-sm text-[#0E1422]">Essential Neutrals</h2>


                    <h4 className="font-medium text-[12px] text-[#5C5F6A]">Added on: 27 July 2023</h4>
                    <span className="font-medium text-[12px] text-[#0E1422]">Remove item</span>
                </div>
                <h3 className="ml-[162px] font-medium text-sm text-[#0E1422]">$22.00</h3>

                <button className="border-[1px] border-[#0E1422] rounded-[4px] ml-8 px-6 py-3">Add to cart</button>
            </div>
        </div>


    )
}

export default Whishlist