import React from "react";

const GoogleButton =()=>{
    return(
        <div className="w-[320px] h-[44px] border-[1px] border-[#B6B7BC] rounded-[4px] flex justify-center items-center px-6 py-3 gap-2 transform transition-transform duration-300 hover:scale-105">
        
            <img src='/images/google.svg' className="w-6 h-6"/>
            <a className="font-medium text-sm text-[#5C5F6A]" href="https://www.google.com/">Continue with Google</a>
            
        </div>

    )
}
export default GoogleButton;