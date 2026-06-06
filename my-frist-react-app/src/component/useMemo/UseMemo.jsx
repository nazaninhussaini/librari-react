import { useMemo, useState } from "react"

export default function UseMemo(){
    const [value,setValue]= useState("");
    const [isDark,setIsDark]= useState(false);
    // const myText= timeDayli(value);
    const myText = useMemo(()=>{
       return timeDayli(value)
    },[value])

    return(
        <div className={`w-full h-fit p-4 text-xl ${isDark ? 'bg-amber-500 text-red-700 ': 'bg-red-500 text-stone-200'}`}>
            <input className="border px-2 focus:outline-0" value={value} onChange={(e)=> setValue(e.target.value)} type="text" />
            <h1 className="text-center font-bold text-2xl">{myText}</h1>
            <button 
            className="border py-3 px-2 rounded-bl-md rounded-tr-md my-2"
            onClick={()=> setIsDark(!isDark)}>Toggel Them</button>
        </div>
    )
}
function timeDayli (text){
    for(let i =0 ; i<200000000; i++){
        return text;
    }
}