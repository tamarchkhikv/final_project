import React from "react";
const FooterWhite = () => {
    return (
        <div>
            <div className="max-w-[1116px] mx-auto flex">
                <div className="w-[272px] h-[50px]">
                    <div className="flex items-center mt-[88px] gap-5">
                        <img src='/images/logo-mark.png' />
                        <h2 className="font-extrabold text-xl text-[#0E1422]">Ecommerce</h2>
                    </div>
                    <p className="mt-3 text-[#717171] font-normal text-sm">DevCut is a YouTube channel for practical project-based learning.</p>
                    <div className="flex gap-[26px] mt-8">
                        <img src="/images/github.png" />
                        <img src="/images/instagram.png" />
                        <img src="/images/youtube.png" />
                    </div>

                </div>

                <div className="flex gap-[72px] ml-[98px] mt-[74px]">
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm">SUPPORT</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171]">FAQ</a>
                            <a className="font-medium text-sm text-[#717171]">Terms of use</a>
                            <a className="font-medium text-sm text-[#717171]">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm">COMPANY</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171]" href='/aboutadmin'>About Admin</a>
                            <a className="font-medium text-sm text-[#717171]">Contact</a>
                            <a className="font-medium text-sm text-[#717171]">Careers</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-[#878A92] text-sm">SHOP</h3>
                        <div className="flex flex-col mt-10 gap-4">
                            <a className="font-medium text-sm text-[#717171]" href='/adminpage'>Admin Page</a>
                            <a className="font-medium text-sm text-[#717171]" href='/adminlogin'>Admin Login</a>
                            <a className="font-medium text-sm text-[#717171]">Cart</a>
                        </div>
                    </div>
                </div>

                <div className="mt-[79px] ml-[159px]">
                    <h3 className="text-[#878A92] font-medium text-sm">ACCEPTED PAYMENTS</h3>
                    <div className="mt-10 flex gap-4">
                        <img src="/images/mastercard.png" />
                        <img src="/images/amex.png" />
                        <img src="/images/visa.png" />
                    </div>
                </div>



            </div>

            <div className="mt-[104px] flex justify-center py-[27px] px-[587px] border-t-[1px]">
                <h5 className="font-normal text-sm text-[#5C5F6A]">© 2023 DevCut. All rights reserved.</h5>
            </div>



        </div>

    )
}
export default FooterWhite;