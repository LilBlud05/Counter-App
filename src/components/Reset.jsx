import React from "react";

function Reset({ setCount }) {
    return (
        <button
            className="bg-red-500 text-white p-3 m-2 rounded-2xl border-red-500 border transition duration-150 hover:scale-110 hover:shadow-2xl"
            onClick={() => setCount(0)}>Reset</button>
    );
}

export default Reset;