import React from "react";
const FooterBlack = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="max-w-[1116px] mx-auto flex">
                <div className="w-[272px] h-[50px]">
                    <div className="flex items-center mt-[88px] gap-5">
                        <img src='/images/logo-mark.png' />
                        <h2 className="font-extrabold text-xl text-[#0E1422]">Ecommerce</h2>
                    </div>
                    <p className="mt-3 text-[#717171] font-normal text-sm">DevCut is a YouTube channel for practical project-based learning.</p>
                    <div className="flex gap-[26px] mt-8">
                        <a href="#">
                            <img src="/images/github.png" className="hover:scale-110" />
                        </a>
                        <a href="#">
                            <img src="/images/instagram.png" className="hover:scale-110" />
                        </a>
                        <a href="#">
                            <img src="/images/youtube.png" className="hover:scale-110" />
                        </a>
                    </div>

                </div>

                <div className="flex gap-[72px] ml-[98px] mt-[74px]">
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm">SUPPORT</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171] hover:underline">FAQ</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline">Terms of use</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm ">COMPANY</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171] hover:underline" >Cart</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline">Contact</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline">Careers</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm">ADMIN</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171] hover:underline" href='/adminpage'>Admin Page</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline" href="/adminlogin">Admin Login</a>
                            <a className="font-medium text-sm text-[#717171] hover:underline" href='/aboutadmin'>About Admin</a>
                        </div>
                    </div>
                </div>

                <div className="mt-[79px] ml-[159px]">
                    <h3 className="text-[#878A92] font-medium text-sm">ACCEPTED PAYMENTS</h3>
                    <div className="mt-10 flex gap-4">
                        <img src="/images/mastercard.png" className="hover:scale-110" />
                        <img src="/images/amex.png" className="hover:scale-110"/>
                        <img src="/images/visa.png" className="hover:scale-110" />
                    </div>
                </div>



            </div>

            <div className=" max-w-[1116px] mx-auto mt-[104px] flex justify-center py-[27px] border-t-[1px]">
                <h5 className="font-normal text-sm text-[#5C5F6A]">© 2023 DevCut. All rights reserved.</h5>
            </div>



        </div>

    )
}
export default FooterBlack;