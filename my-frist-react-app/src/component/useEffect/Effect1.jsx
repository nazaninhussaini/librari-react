import { useEffect, useState } from "react"

export default function Effect1 (){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = "Cheang the Title " + count
    },[count])

    // Qustion 2
    useEffect(()=>{
        console.log("Welcom");
    },[])
    return (
        <div className=" bg-linear-60 from-blue-400 via-purple-500 text-transparent bg-clip-text to-black">
            <div>
            <h1>Qustion one for Effect</h1>
            <button className="border p-3" onClick={()=>setCount(count + 1)}>Click Me</button>
            </div>
            <div></div>
        </div>

    )
}