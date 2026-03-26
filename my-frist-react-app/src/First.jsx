import { useState } from "react";

function Exampal (){

    const [v,setV] = useState("")
    return(
        <div className="flex flex-col w-full justify-center gap-3">
            <h1 className="text-2xl font-medium">{v}</h1>
            <input value={v} onChange={(e)=>setV(e.target.value)}
            className="border py-3 px-2 w-40 flex justify-center items-center "
            type="text" />
        </div>
    )
}
export default Exampal;