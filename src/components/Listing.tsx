import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const Listing = () => {

    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState<boolean>(true);
    const { category }: any = useParams()
    const [currentPage, setCurrentPage] = useState<any>(1)
    const [postPerPage, setPerPage] = useState<any>(6)

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


    const getDatabyCategory = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);

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
        if (category) {
            getDatabyCategory()
        } else {
            getData()
        }

    }, [category]);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = apiData.slice(firstPostIndex, lastPostIndex)


    return (
        <div className="w-[824px] ml-10">
            <h2 className="font-medium text-sm text-[#0E1422]">Applied Filters:</h2>
            <div className="flex gap-3 mt-3">
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px] ">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Perfume</h3>
                    <button>
                        <img src='/images/x.svg' alt="photo" />
                    </button>
                </div>
                <div className="flex items-center  justify-center gap-2 w-[111px] h-9 border-[1px] rounded-[100px]">
                    <h3 className="font-medium text-[12px] text-[#0E1422]">Size: M</h3>
                    <button>
                        <img src='/images/x.svg' alt="photo" />
                    </button>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <h3 className="font-medium text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</h3>
                <div className="flex gap-[6px] items-center">
                    <h3 className="font-medium text-[12px] text-[#5C5F6A]">SORT BY</h3>
                    <button>
                        <img src='/images/down.svg' alt="photo" />
                    </button>
                </div>

            </div>

            <div>
                {loading ? (
                    <h1 className='font-bold text-[#0E1422] text-center text-2xl mt-40'>Loading...</h1>
                ) : (
                    <div className="grid grid-cols-3 gap-10  mt-4 ">
                        {currentPost.map((product: any, index: number) => (
                            <Link key={index}
                                to={`/${product.id}`}
                                className="transform transition-transform duration-300
                    hover:scale-105 cursor-pointer w-[264px] h-[434px] border rounded-md shadow-md">
                                <div className="w-60 h-72 rounded">
                                    <img src={product.image} className="w-[200px] h-[200px] mx-auto mt-5" alt="photo" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm  hover:text-gray-500 text-center  h-5 overflow-hidden">{product.title}</p>
                                    <div className="flex justify-center items-center ">
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
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Pagination
                totalPosts={apiData.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
export default Listing;