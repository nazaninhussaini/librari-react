import { useEffect, useState } from "react"

export default function Effect3 (){
    const [value ,setValue]= useState("");
    const [counter,setCounter] = useState(0);
    useEffect(()=>{ 
        setCounter((prev) => value.length);
    },[value]);
    return(
        <div className="p-3 flex mt-5 flex-col gap-4 text-teal-400 shadow-2xl shadow-teal-200 border-teal-500">
            <h1>Qustion 5</h1>
            <input type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Enter some text" className="border py-2 focus:outline-0 border-teal-500 rounded-md"/>
            <h1 className="text-2xl">You entered {counter} chers</h1>
        </div>
    )
}