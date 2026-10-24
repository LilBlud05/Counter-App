import React from "react";

function Increment({count, setCount}) {    ;
    return (
        <button
            className="bg-blue-500 text-white p-3 m-2 rounded-2xl border-blue-500 transition duration-150 hover:scale-110 hover:shadow-2xl" onClick={() => setCount(count + 1)} >Increment</button>
    );
}

export default Increment;