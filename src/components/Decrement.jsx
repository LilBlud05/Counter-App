import React from "react";

function Decrement({ count, setCount }) {
    return (
        <button
            className="bg-emerald-500 text-white p-3 m-2 rounded-2xl border-emerald-500 transition duration-150 hover:scale-110 hover:shadow-2xl" onClick={() => setCount(count - 1)}>Decrement</button>
    );
}

export default Decrement;