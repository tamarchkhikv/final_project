import React, { useEffect } from "react";
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Swiper as MySwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import RadioButton from "./RadioButton";
import ColorRadioButton from "./ColorRadioButton";
import { useState } from "react";
import { addToCart } from "../store/app/cartSlice";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";






const ProductPageSectionOne = () => {

    const { id }: any = useParams();

    const [dataDetails, setDataDetails] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);


    const getDataDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            setDataDetails(data)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDataDetails();
    }, [id]);


    const dispatch = useDispatch()
    
    const handleAddToCart = (e: any, products: any) => {
        e.preventDefault()
        dispatch(addToCart(dataDetails))
        alert("Product Added Succesfully!")
        console.log (products)


    }


    const [count, setCount] = useState(1);

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        if (count === 1) {
            return null
        }
        setCount(count - 1);
    };


    return (
        <div>
            {loading ? (
                <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
            ) : (
                <div>

                    <div className='max-w-[1116px] mx-auto mt-4'>
                        <Box>
                            <Breadcrumbs
                                aria-label='breadcrumbs'
                                separator={<NavigateNextIcon fontSize='small' />}

                            >
                                <Link underline='none' href='#' color='text.secondary'>Ecommerce</Link>

                                <Typography color='text.primary' fontWeight='Medium'>Black man t-shirt</Typography>
                            </Breadcrumbs>

                        </Box>
                    </div>
                    <div className="flex mt-4 max-w-[1092px] mx-auto  gap-[120px]">
                        <MySwiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="h-[574px] w-[534px] border border-gray-100 rounded-md shadow-lg"
                        >
                            {Array.from({ length: 4 }, (_, index) => (
                                <SwiperSlide
                                    key={index} >
                                    <img src={dataDetails.image} className='w-[237px] h-[312px] mx-auto mt-24' />

                                </SwiperSlide>
                            ))}
                        </MySwiper>

                        <div className="w-[438px] h-[562px]">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold text-2xl text-[#0E1422]">{dataDetails.title}</h1>
                                <img src="/images/share.svg" alt="photo"/>
                            </div>

                            <div className="flex gap-2 mt-3">
                                <div className="w-[167px] h-7 border-[1px] rounded-[100px] flex justify-center items-center bg-[#F6F6F6]">
                                    <img src="/images/star.svg" alt="photo"/>
                                    <span className="font-medium text-[12px] text-[#5C5F6A]">4.2 — 54 Reviews </span>

                                </div>
                                <button className="w-[95px] px-4 py-[2px] h-7 border-[1px] rounded-[100px] text-[#5C5F6A] text-[12px] font-medium"> {dataDetails.rating.count === 0
                                                ? "out of stock"
                                                : dataDetails.rating.count < 5
                                                    ? "low stock"
                                                    : "in stock"}</button>

                            </div>

                            <h3 className="mt-6 font-semibold text-[18px] text-[#0E1422]">{`$ ${dataDetails.price}`}</h3>

                            <div>
                                <h5 className=" text-[#5C5F6A] mt-8 text-[12px] font-medium">AVAILABLE COLORS</h5>
                                <div className=" flex mt-[10px] gap-[10px]">
                                    <ColorRadioButton />
                                </div>
                            </div>


                            <div>

                                <h5 className=" text-[#5C5F6A] mt-8 text-[12px] font-medium">SELECT SIZE</h5>
                                <div className=" flex mt-[10px] gap-[10px]">
                                    <RadioButton />
                                </div>
                            </div>

                            <div className="mt-8">
                                <h5 className=" text-[#5C5F6A] mt-8 text-[12px] font-medium">QUANTITY</h5>

                                <div className="w-[164px] h-[44px] border-[1px] border-[#E6E7E8] flex items-center justify-between rounded-[4px]  px-4 gap-3 mt-[10px]">
                                    <button onClick={minus} className=" ">
                                        <img src="/images/minus.svg" alt="photo" />
                                    </button>
                                    <p className="text-base">{count}</p>
                                    <button onClick={plus} className="">
                                        <img src="/images/add.svg"  alt="photo"/>
                                    </button>


                                </div>
                                <div className="mt-10 flex items-center gap-4 transform transition-transform duration-300 hover:scale-105"
                                onClick={(e) => handleAddToCart(e, dataDetails)}
                                >
                                    <button className=" bg-black w-[285px] h-[44px] text-white rounded-[4px]">Add to cart</button>
                                    <img src="/images/whishlist.svg" className="w-[43px] h-[43px]" alt="photo" />

                                </div>

                                <h5 className="font-medium text-[12px] text-[#5C5F6A] mt-3">— Free shipping on orders $100+</h5>

                            </div>






                        </div>
                    </div>

                </div >
            )}
        </div>

    )
}


export default ProductPageSectionOne;