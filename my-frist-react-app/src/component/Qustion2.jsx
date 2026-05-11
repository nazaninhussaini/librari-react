import { useState } from "react"

export default function (){
    const [string,setString] = useState("");
    return (
        <div className="w-full p-3">
            <h1>سوال دوم</h1>
            <h1 className="border w-2/12 h-10 text-center mx-auto my-3 overflow-auto">{string}</h1>
            <input placeholder="Wraith Text ....." className="border" type="text" onChange={(e)=>setString(e.target.value)}/>
        </div>
    )
}
