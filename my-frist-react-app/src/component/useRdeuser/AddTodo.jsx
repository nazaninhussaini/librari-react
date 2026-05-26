import { useState } from "react"

export default function AddTodo({todos , dispatch}){
    const [value,setValue] = useState("");
    function handleClick(){
        dispatch({payload : value})
        setValue("");
    }
    return(
        <div>
               <input
               value={value}
               onChange={(e) =>setValue(e.target.value)}
            className="w-1/2 border-stone-800 focus:outline-0 bg-gray-400 text-white shadow-2xl p-3 rounded-md"
            type="text" placeholder="What's in your mind" />
            <button 
            onClick={handleClick}
            className="py-3 shadow-2xl mx-3 px-5 border-white rounded-md text-stone-200 bg-linear-60 from-gray-500 to-stone-300 ">Save</button>
        </div>
    )
}