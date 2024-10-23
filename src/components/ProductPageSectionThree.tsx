import React, { useEffect} from "react";
import { setProducts } from "../store/app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../components/Data";
import { RootState } from "../store/store";



const ProductPageSectionThree = () => {

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product)
    useEffect(() => {
        dispatch(setProducts(ProductsData))
    })

    return (
        <div className=" flex mx-auto max-w-[1092px] py-4 pb-[136px]">
            <div>
                <h1 className="font-bold text-2xl text-[#0E1422]">You might also like</h1>
                <h4 className="font-medium text-[12px] text-[#878A92] mt-2">SIMILAR PRODUCTS</h4>

                <div className="grid grid-rows-1 grid-flow-col mx-auto max-w-[1092px] gap-10 mt-14 ">
                {products.products.slice(2, 6).map((product: any, index: any) => (
                        <div key={index}>
                            <div className="w-60 h-80 bg-neutral-100 rounded ">
                                <img src={product.img} />
                            </div>
                            <div>
                                <p className="font-medium text-sm mt-3">{product.title}</p>
                                <div className="flex items-center  mt-2 ">
                                    <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                        {product.stock}
                                    </button>
                                    <div className="mt-3 ml-2 font-normal text-sm text-center">
                                        {product.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default ProductPageSectionThree;