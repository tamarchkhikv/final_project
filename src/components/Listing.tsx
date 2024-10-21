import React, { useEffect } from "react";
import CustomPagination from "./CustomPagination";
import { setProducts } from "../store/app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../components/Data";
import { RootState } from "../store/store";



const Listing = () => {

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product)
    useEffect(() => {
        dispatch(setProducts(ProductsData))
    })

    return (
        <div className="w-[824px] ml-10">
            <h2 className="font-medium text-sm text-[#0E1422]">Applied Filters:</h2>
            <div className="flex gap-3 mt-3">
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px] ">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Perfume</h3>
                    <button>
                        <img src='/images/x.svg' />
                    </button>
                </div>
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px]">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Size: M</h3>
                    <button>
                        <img src='/images/x.svg' />
                    </button>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <h3 className="font-medium text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</h3>
                <div className="flex gap-[6px] items-center">
                    <h3 className="font-medium text-[12px] text-[#5C5F6A]">SORT BY</h3>
                    <button>
                        <img src='/images/down.svg' />
                    </button>
                </div>

            </div>


            <div className="grid grid-rows-3 grid-flow-col gap-10  mt-4">
                {products.products.map((product: any, index: number) => (
                    <a key={index}
                        // href={`/listing/${product.id}`}
                        className="transform transition-transform duration-300
                    hover:scale-105 cursor-pointer">
                        <div className="w-60 h-80 bg-neutral-100 rounded">
                            <img src={product.img} />
                        </div>
                        <div>
                            <p className="font-medium text-sm mt-3  hover:text-gray-500">{product.title}</p>
                            <div className="flex items-center  mt-2 ">
                                <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                    {product.stock}
                                </button>
                                <div className="mt-3 ml-2 font-normal text-sm text-center">
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <CustomPagination />
        </div>
    )
}
export default Listing;