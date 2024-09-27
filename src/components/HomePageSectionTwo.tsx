import React from "react";
const HomePageSectionTwo = () => {
    return (
        <div className="pt-[88px] pb-[168px] max-w-[1092px] mx-auto">
            <div className="grid grid-cols-12 gap-[54px]">
                <div className="col-start-1 col-span-4 h-[218px]">
                    <img src="/images/icon-box.png" className="mt-4" />
                    <h1 className="font-semibold text-base mt-6">Free Shipping</h1>
                    <p className="text-sm font-normal text-[#5C5F6A] mt-3 w-[272px]">Upgrade your style today and get FREE shipping
                        on all orders! Don't miss out.</p>

                </div>
                <div className="col-start-5 col-span-4 h-[218px]">
                    <img src="/images/icon-boxtwo.png" className="mt-4" />
                    <h1 className="font-semibold text-base mt-6">Satisfaction Guarantee</h1>
                    <p className="text-sm font-normal text-[#5C5F6A] mt-3 w-[272px]">Shop confidently with our
                        Satisfaction Guarantee: Love it or get a refund.</p>

                </div>
                <div className="col-end-13 col-span-4 h-[218px]">
                    <img src="/images/icon-boxthree.png" className="mt-4" />
                    <h1 className="font-semibold text-base mt-6">Secure Payment</h1>
                    <p className="text-sm font-normal text-[#5C5F6A] mt-3 w-[272px]">Your security is our priority. Your payments are
                        secure with us.</p>

                </div>
            </div>

            <div className="mt-[72px] flex justify-center ">
                <div>
                    <span className="text-[#878A92] font-medium text-[12px]">Shop Now</span>
                    <h2 className="font-bold text-2xl text-[#0E1422]">Best Selling</h2>
                </div>
            </div>

            <div className="mt-[80px] grid grid-cols-12 gap-5">
                <div className="col-start-1 col-span-3">
                    <img src="/images/image-1.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Classic Monochrome Tees</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm ">$35.00</span>
                        </div>



                </div>

                <div className="col-start-4 col-span-3">
                    <img src="/images/image-2.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Monochromatic Wardrobe</h4>
                        <div className="flex gap-4 mt-[14px]">
                        
                        
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$27.00</span>
                           
                        </div>



                </div>

                <div className="col-start-7 col-span-3">
                    <img src="/images/image-3.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Essential Neutrals</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$22.00</span>
                        </div>



                </div>

                <div className="col-start-10 col-span-3">
                    <img src="/images/image-4.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">UTRAANET Black</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$43.00</span>
                        </div>



                </div>
            </div>
        </div>

    )
}
export default HomePageSectionTwo;