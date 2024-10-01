import React from "react";
import { useState } from "react";
const Counter =()=>{
    const [count, setCount] = useState(1);

    const plus =() =>{
        setCount (count +1);
    };

    const minus =() =>{
        if (count === 1){
            return null
        }
        setCount (count -1);
    };

    return(
        <div className="w-[107px] h-[40px] border-[1px] border-[#E6E7E8] flex items-center justify-center rounded-[4px]  py-3 gap-[18px] ml-8">
            <button onClick={minus} className="p-2">-</button>
            <p className="text-sm">{count}</p>
            <button onClick={plus} className="text-sm p-2">+</button>


        </div>

    )
}
export default Counter;
 