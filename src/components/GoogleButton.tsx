import React from "react";

const GoogleButton =()=>{
    return(
        <div className="w-[320px] h-[44px] border-[1px] border-[#B6B7BC] rounded-[4px] flex justify-center items-center px-6 py-3 gap-2">
        
            <img src='/images/google.svg' className="w-6 h-6"/>
            <button className="font-medium text-sm text-[#5C5F6A]">Continue with Google</button>
            
        </div>

    )
}
export default GoogleButton;