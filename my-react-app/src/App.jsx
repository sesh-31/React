import React from "react";
import './index.css';
// import { useState } from "react";
import Card from "./component/Card"

function App() {
 let myObj ={
  username:"Shesh raj paudel",
  age:19
  
}
  return (
    <>
    <Card username="shesh raj"  someObj={myObj}/>
    <Card username="Messiiiiiii" someObj={myObj}/>
    </>
  );
}

export default App;
