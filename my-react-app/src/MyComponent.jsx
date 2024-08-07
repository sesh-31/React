import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed , setEmployed] =useState(false);

  const updateName = () => {
    setName("Lamine Yamal");
  };

 const increamentAge =()=> {
    setAge(age+1);
 }
 const toggleEmployeeStatus = ()=>{
    setEmployed(!isEmployed);
 }
  return (
    <>
      <p>Name: {name}</p>
      <button className="m-2 p-2 border-solid bg-red-200 border-sky-500 text-black rounded" onClick={updateName}>Set Name</button>
    
      <p>Age: {age}</p>
      <button className="m-2 p-2 border-solid bg-red-200 border-sky-500 text-black rounded" onClick={increamentAge}>Set Age</button>
      
      <p>Is Employee: {isEmployed ? "yes":"no"}</p>
      <button className=" p-2 m-2 border-solid bg-red-200 border-sky-500 text-black rounded" onClick={toggleEmployeeStatus}>Toggle Status </button>
    </>
  );
}

export default MyComponent;
