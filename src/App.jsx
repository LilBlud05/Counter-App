import React, {useState} from "react";
import './App.css'
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";


function Counter() {
   const [count, setCount] = useState(0)

    return <>
    <div className="w-[30%] h-100 mt-20 m-auto flex justify-center flex-col items-center rounded-3xl shadow-2xl">
        <div className="text-5xl mb-3 p-5 shadow-3xl rounded-2xl border border-teal-100">{count}</div>
        <div className="">
            <Decrement count={count} setCount={setCount} />
            <Reset count={count} setCount={setCount} />   
            <Increment count={count} setCount={setCount}/>       
        </div>
    </div>
    </>;
}

export default Counter;

