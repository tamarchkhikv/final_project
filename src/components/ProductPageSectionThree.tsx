import React, { useEffect, useState } from "react";




const ProductPageSectionThree = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState<boolean>(true);


    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://fakestoreapi.com/products');

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



    return (
        <div className=" flex mx-auto max-w-[1092px] py-4 pb-[136px]">
            <div>
                <h1 className="font-bold text-2xl text-[#0E1422]">You might also like</h1>
                <h4 className="font-medium text-[12px] text-[#878A92] mt-2">SIMILAR PRODUCTS</h4>
                <div>
                    {loading ? (
                        <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
                    ) : (
                        <div className="grid grid-rows-1 grid-flow-col mx-auto max-w-[1092px] gap-10 mt-14 ">
                            {apiData.slice(2, 6).map((product: any, index: any) => (
                                <div key={index} className="transform transition-transform duration-300
                          hover:scale-105 cursor-pointer w-[264px] h-[434px]">

                                    <img src={product.image} className="w-[200px] h-[230px] mx-auto" />

                                    <div>
                                        <p className="font-medium text-sm mt-3  hover:text-gray-500">{product.title}</p>
                                        <div className="flex items-center  mt-2 ">
                                            <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                                {product.rating.count === 0
                                                    ? "out of stock"
                                                    : product.rating.count < 5
                                                        ? "low stock"
                                                        : "in stock"}
                                            </button>
                                            <div className="mt-3 ml-2 font-normal text-sm text-center">
                                               $ {product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}

export default ProductPageSectionThree;