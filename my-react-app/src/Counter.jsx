import React, { useState } from "react"
function Counter(){
   const [count, setCount]=useState(0);

   const increament=()=>{
    setCount(count+1);
   }
   const decreament=()=>{
    setCount(count-1);
    }
    const reset=()=> {
        setCount(0);
    }
    return (
        <div className="text-center">
            <p className=" text-center text-7xl ">{count}</p>
            
            <button className="counter-button m-2 p-2 border-solid font-semibold border-2 bg-red-200 border-white-800 text-black rounded" onClick={decreament}>Decreament</button>
            <button className="counter-button m-2 p-2 border-solid font-semibold border-2 bg-red-200 border-white-800 text-black rounded" onClick={reset}>Reset</button>
            <button className="counter-button m-2 p-2 border-solid font-semibold border-2 bg-red-200 border-white-800 text-black rounded" onClick={increament}>increament</button>

        </div>
    )
}

export default Counter