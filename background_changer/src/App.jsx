// App.jsx
import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      {/* Content of your component */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{
              setColor("red");
            }} className='outline-none px-4 bg-red-400 py-1'>red
            
          </button>
          <button onClick={()=>{
            setColor("blue");
          }} className='outline-none px-4 bg-blue-400 py-1'>blue</button>
          <button onClick={()=>{
            setColor("green");
          }} className='outline-none px-4 bg-green-400 py-1'>green</button>
          <button onClick={()=>{
            setColor("grey");
          }} className='outline-none px-4  py-1 bg-stone-500'>grey</button>
        </div>
      </div>
    </div>
  );
}

export default App;
