import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const WriteReviw = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [review, setReview] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const navigate = useNavigate()


    const onChangeSearch = (e: any) => {
        setEmail(e.target.value);
        setName(e.target.value);
        setReview(e.target.value)

    }
    const onSubmit = (e: any) => {
       
        e.preventDefault();

        const value = {email, name ,review};
      
      

        setIsPending(true);
        
        fetch('https://reqres.in/api/users', {
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(value)

        }).
        then(()=>{
            alert("new review added!")
            setIsPending(false);
            navigate('/product')
        })
        

    }

    return (

        <form  onSubmit={onSubmit} className=" container  w-[424px] px-10 mt-12 mx-auto border-4 pt-8 pb-16">
            <div className="flex items-center justify-between border-b-[1px] pb-[19px] w-[344px]">
                <h1 className="font-semibold text-base text-[#0E1422]">Write Review</h1>
                <img src="/images/x.svg" />

            </div>

            <div className="mt-10 flex flex-col w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Email</label>
                <input onChange={onChangeSearch} type='email' required className="border-[1px] h-[45px] rounded-md py-[10px] px-[15px]"></input>
            </div>


            <div className="mt-[15px] flex flex-col  w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Full name</label>
                <input  onChange={onChangeSearch} type='text'required className="border-[1px] h-[45px] rounded-md py-[10px] px-[15px]"></input>
            </div>

            <div className="mt-[23px] flex flex-col  w-[344px]">
                <label className="font-medium text-sm text-[#474B57]">Review</label>
                <textarea  onChange={onChangeSearch}  required className="border-[1px] rounded-md py-[10px] px-[15px] h-32"></textarea>
            </div>

            <img src="/images/5star.svg" className="mt-6" />

            {!isPending && <button className="mt-12 bg-black  w-[344px] text-white  h-[44px] rounded-[4px]  transform transition-transform duration-300 hover:scale-105">Submit Your Review</button>}
            {isPending && <button disabled className="mt-12 bg-black  w-[344px] text-white  h-[44px] rounded-[4px]">Submit Your Review</button>}


        </form>

    )
}
export default WriteReviw;