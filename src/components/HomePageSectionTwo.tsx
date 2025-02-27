import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomePageSectionTwo = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState<boolean>(true);


    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=4');

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data: any = await res.json();

            setApiData(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getData()
    }, [])


    const infoItems = [
        {
            icon: "/images/icon-box.png",
            title: "Free Shipping",
            description: "Upgrade your style today and get FREE shipping on all orders! Don't miss out."
        },

        {
            icon: "/images/icon-boxtwo.png",
            title: "Satisfaction Guarantee",
            description: "Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
        },

        {
            icon: "/images/icon-boxthree.png",
            title: "Secure Payment",
            description: "Your security is our priority. Your payments are secure with us."
        }
    ]
    return (
        <div className="pt-[88px] pb-[168px] max-w-[1092px] mx-auto">
            <div className="grid grid-cols-3 gap-[54px]" 
            data-aos="flip-up"
            >
                {infoItems.map((item, index) => (
                    <div key={index} className=" h-[218px] px-4 shadow-md transform transition-transform duration-300
                 hover:scale-105 cursor-pointer">

                        <img src={item.icon} className="mt-4" alt="photo" />
                        <h1 className="font-semibold text-base mt-6">{item.title}</h1>
                        <p className="text-sm font-normal text-[#5C5F6A] mt-3 w-[272px]">{item.description}</p>

                    </div>
                ))}

            </div>

            <div className="mt-[72px] flex justify-center ">
                <div>
                    <span className="text-[#878A92] font-medium text-[12px]">Shop Now</span>
                    <h2 className="font-bold text-2xl text-[#0E1422]">Best Selling</h2>

                </div>
            </div>
            <div>
                {loading ? (
                    <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
                ) : (
                    <div className="mt-[80px] grid grid-flow-col gap-10 " data-aos="flip-up">
                        {apiData.map((product: any, index: any) => (
                            <div className="transform transition-transform duration-300
                    hover:scale-105 cursor-pointer w-[264px] h-[434px]">
                                <Link to={`/${product.id}`}
                                    key={index} >
                                    <img className="w-[200px] h-[230px] mx-auto" src={product.image} alt="photo" />
                                    <h4 className="mt-[25px] font-medium text-sm hover:text-gray-500 text-center h-5 overflow-hidden">{product.title}</h4>
                                    <div className="flex justify-center gap-4 mt-[14px]  ">
                                        <div className="text-[#0E1422] font-medium text-[12px] border-[#E6E7E8] border-[1px] px-4 py-[2px] rounded-[100px]">
                                            {product.rating.count === 0
                                                ? "out of stock"
                                                : product.rating.count < 5
                                                    ? "low stock"
                                                    : "in stock"}
                                        </div>

                                        <span className="text-[#474B57] font-normal text-sm "> $ {product.price}</span>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                )}
            </div>

        </div>


    )
}
export default HomePageSectionTwo;