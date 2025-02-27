import React from "react";




const Counter =({count, onQuantityChange} :any)=>{
    

    const plus =() =>{
        onQuantityChange (count + 1);
    };

    const minus =() =>{
        if (count > 1){
            onQuantityChange (count - 1 );
        }
    
    };

    console.log(count)

    return(
        <div className="w-[107px] h-[40px] border-[1px] border-[#E6E7E8] flex items-center justify-center rounded-[4px]  py-3 gap-[18px] ml-8">
            <button onClick={minus} className="p-2 text-xl">-</button>
            <p className="text-sm">{count}</p>
            <button onClick={plus} className="p-2 text-xl">+</button>


        </div>

    )
}
export default Counter;
 