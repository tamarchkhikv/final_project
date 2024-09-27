import React from "react";

const HomePageSectionFour =()=>{
    return(
        <div className="mt-[152px] mb-[192px] max-w-[1116px] mx-auto">
            <div className="flex justify-center gap-6">
                
                <button className="rounded-[100px] border-[#E9E9EB] border-[1px] py-[3px] px-[16px] font-medium text-[14px] 
                text-[#202533]">Featured</button>
                <button className="font-normal text-[14px] text-[#717171]">Latest</button>

            </div>

            <div className="mt-12 grid grid-cols-12 gap-5">
                <div className="col-start-1 col-span-3">
                    <img src="/images/image-5.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Elegant Ebony Sweatshirts</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px]  border-[#E6E7E8] border-[1px] 
                            px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm ">$35.00</span>
                        </div>



                </div>

                <div className="col-start-4 col-span-3">
                    <img src="/images/image-6.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Sleek and Cozy Black</h4>
                        <div className="flex gap-4 mt-[14px]">
                        
                        
                            <div className="text-[#0E1422] font-medium text-[12px]  border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$50.00</span>
                           
                        </div>



                </div>

                <div className="col-start-7 col-span-3">
                    <img src="/images/image-7.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">Raw Black Tees</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$19.00</span>
                        </div>



                </div>

                <div className="col-start-10 col-span-3">
                    <img src="/images/image-8.png"/>
                        <h4 className="mt-[25px] font-medium text-sm">MOCKUP Black</h4>
                        <div className="flex gap-4 mt-[14px]">
                            <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">IN STOCK</div>

                            <span className="text-[#474B57] font-normal text-sm">$30.00</span>
                        </div>



                </div>
            </div>

        </div>


    )
}

export default HomePageSectionFour;