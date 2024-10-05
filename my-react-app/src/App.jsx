import React from "react";
import './index.css';
import { useState } from "react";


function App() {
  let [counter , setCounter]=useState(15)
  const addValue=()=>{
    
    // counter=counter+1;
    if(counter>=20){
      setCounter(20);
    }
    else{
      counter= counter+1;
    }
    setCounter(counter);
    console.log("you clicked !",counter)
  }
  const removeValue =()=>{
    
    if(counter<=0){
    setCounter(0);
    }else{counter=counter-1}
   setCounter(counter);
  console.log("you clicked !",counter)
}
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Shesh will help you to make a counter</h1>
        <h2 className="text-2xl text-gray-700 mb-4">Counter value : {counter}</h2>
        
        <div className="flex space-x-4">
          <button onClick={addValue} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600
          
          ">
            +
          </button>
          <button onClick={removeValue} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
