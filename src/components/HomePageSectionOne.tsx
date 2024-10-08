import React from "react";

const HomePageSectionOne = () => {
    return (



        <div className="bg-[#F6F6F6]  ">

            <div className="max-w-[1116px] mx-auto flex justify-between">
                <div className="mt-[136px] mb-[136px]">

                    <h1 className="text-[32px] font-semibold text-[#202533]">Fresh Arrivals Online</h1>
                    <h6 className="text-[#474B57] font-normal mt-3 text-[14px]">Discover Our Newest Collection Today.</h6>
                    <div className="mt-[48px] bg-[#0E1422] w-[183px] h-[44px] flex items-center text-white px-6 text-sm gap-[6px] rounded-md">
                        <a href='listing'>
                            <button>View Collection</button>
                        </a>
                        <img src='/images/arrow-right.png' className="w-6 h-6" />
                    </div>
                </div>

                <div className="relative w-[340px] h-[440px]">
                    <img src='/images/burst-pucker.png' className="mt-[89px]" />
                    <img src='/images/ellipse.png' className="absolute bottom-3" />
                    <img src='/images/hero_image.png' className='w-[255px] h-[382px] absolute right-0 bottom-0' />


                </div>
            </div>
        </div>





    )
}
export default HomePageSectionOne;