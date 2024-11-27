import React, { useState, useEffect } from "react";
import GoogleButton from "./GoogleButton";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom'


const LoginSectionTwo = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e: any) => {

        e.preventDefault();

        setIsLoading(true);

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })

        })
            .then(res => res.json())
            .then(json => {
                Cookies.set("AccessToken", json.token)
                setIsLoading(false)
                alert("Log in successfully")
            })
            .catch(err => {

                setIsLoading(false)
                alert("User not found")


            }).finally(() => {
                window.location.reload()
            })
    }


    const onUserNameChange = (e: any) => {
        setUserName(e.target.value)
    }
    const onUserPasswordChange = (e: any) => {
        setPassword(e.target.value)
    }

    return (
        <div className="flex justify-center mt-32 mb-[148px]">
            <div className="w-[320px]">
                <GoogleButton />
                <div className="flex items-center mt-8 gap-4">
                    <hr className="w-[136px]"></hr>

                    <span className="font-medium text-[12px] text-[#5C5F6A]">OR</span>
                    <hr className="w-[135px]"></hr>


                </div>
                <form onSubmit={onSubmitForm}>
                    <div className="flex flex-col mt-[34px]">
                        <label>Email</label>
                        <input type='text' required onChange={onUserNameChange} className=" w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                    </div>
                    <div className="flex flex-col mt-[15px]">
                        <label>Password</label>
                        <input type="password" required onChange={onUserPasswordChange} className="w-[320px] h-[45px] rounded-md border-[1px] px-[15px] py-[10px] border-[#E6E7E8] outline-none"></input>
                    </div>

                    <Link to="/forgotpassword"
                        className="flex justify-end mt-4 font-medium text-[#555555] text-[12px] hover:text-red-800">Forgot Password?</Link>

                    <button className="w-[318px] h-[44px] py-3 bg-[#0E1422] text-white rounded-[4px] mt-6 text-sm 
                     hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105">
                        {isLoading ? 'loading...' : 'Login'}</button>


                    <Link to="/signup" className="font-normal text-sm text-[#5C5F6A] flex justify-center mt-6  hover:text-red-800">Don't have an account? Sign up</Link>

                </form>

            </div>

        </div>

    )
}
export default LoginSectionTwo;


