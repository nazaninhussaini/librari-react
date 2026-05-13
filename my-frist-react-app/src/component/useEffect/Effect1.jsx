import { useEffect, useState } from "react"

export default function Effect1 (){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = count
    },[count])
    return (
        <div>
            <h1>Qustion one for Effect</h1>
            <button className="border" onClick={()=>setCount(count + 1)}>Click Me</button>
        </div>
    )
}