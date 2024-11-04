import React from "react";
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';

const NewsLetter = () => {
    const [value, setValue] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const navigate = useNavigate()


    const onChangeSearch = (e: any) => {
        setValue(e.target.value);

    }
    const onSubmit = (e: any) => {
       
        e.preventDefault();

        const submit = {value};

        setIsPending(true);
        
        fetch('https://reqres.in/api/users', {
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(submit)

        }).
        then(()=>{
            alert("new subscriber added!")
            setIsPending(false);
            navigate('/')
        })
        

    }


    return (
        <div className=" bg-[#F6F6F6]">
            <div className="max-w-[1116px] mx-auto flex justify-between py-[59px]">
                <div>
                    <h2 className="font-bold text-2xl text-[#0E1422]">Join Our Newsletter</h2>
                    <p className="font-normal text-[14px] text-[#5C5F6A] mt-6">We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <form
                    onSubmit={onSubmit}>
                    <input placeholder="Your email address" type="email" onChange={onChangeSearch} className="py-[10px] px-[15px] rounded-md  bg-[#F6F6F6] outline-none border-[#E6E7E8] border-[1px] transform transition-transform duration-300 hover:scale-105"></input>
                    {!isPending &&<button className="ml-4 px-6 py-3 bg-[#0E1422] text-white rounded-md  transform transition-transform duration-300 hover:scale-105">Subscribe</button>}
                    {isPending &&<button disabled className="ml-4 px-6 py-3 bg-[#0E1422] text-white rounded-md  transform transition-transform duration-300 hover:scale-105">Adding subscriber</button>}
                </form>

            </div>
        </div>

    )
}
export default NewsLetter;