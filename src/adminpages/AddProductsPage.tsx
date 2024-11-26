import React from 'react'
import { useState } from 'react';
import Cookies from "js-cookie";





const AddProductsPage = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDiscription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e: any) => {

        e.preventDefault();

        setIsLoading(true);

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            })

        })
            .then(res => res.json())
            .then(json => {
                Cookies.set("AccessJson", json)
                setIsLoading(false)
                alert("Product Add successfully")
                console.log(json)
            })
            .catch(err => {

                setIsLoading(false)
                alert("User not found")



            })
           
    }


    const onProductTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const onProductPrice = (e: any) => {
        setPrice(e.target.value)
    }
    const onProductDescription = (e: any) => {
        setDiscription(e.target.value)
    }
    const onProductCategory = (e: any) => {
        setCategory(e.target.value)
    }
    const onProductImage = (e: any) => {
        setImage(e.target.value)
    }


    return (
        <div className='flex justify-center'>


            <div className="w-[500px] h-[885px] bg-white ml-[47px] ">
                <div className="py-8 border-b-[1px] border-[#E9E9EB]">
                    <h1 className="ml-[47px] font-medium text-[18px] text-[#0E1422]">Add Product</h1>
                </div>
                <form onSubmit={onSubmitForm}>

                    <div className="ml-12 flex flex-col gap-4 mt-10">
                        <div className="flex flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Title</label>
                            <input onChange={onProductTitle} type='text' className='mt-2 w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Price</label>
                            <input onChange={onProductPrice} type='text' className=' mt-2 w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Category</label>
                            <input onChange={onProductCategory} type='text' className='mt-2 w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></input>
                        </div>

                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Description</label>
                            <textarea onChange={onProductDescription} className=' mt-2 w-80 h-[128px] border-[1px] rounded-md px-[15px] py-[10px] outline-none'></textarea>
                        </div>
                        <div className="flex  flex-col">
                            <label className='font-medium text-sm text-[#474B57]'>Images</label>
                            <div className='mt-2 flex gap-2 w-80 h-[45px] border-[1px] rounded-md px-[15px] py-[10px]'>
                                <img src='/images/upload.svg' alt="photo" />
                                <input type="text" onChange={onProductImage} className=" font-medium text-[#878A92] text-sm"></input>
                            </div>

                        </div>
                        <button className='bg-black text-white w-[144px] h-11 py-3 px-6 rounded-[4px] text-sm mt-[51px]' >Save Product</button>
                    </div>
                </form>





            </div>


        </div>



    )
}

export default AddProductsPage;