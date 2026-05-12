import { useEffect, useState } from "react"

export default function Qustion7 (){
    const [seconds,setSeconds] = useState(0);
    const [running,setRunning] = useState(false);
    useEffect(()=>{
        let interval = null;
        if(running){
       interval = setInterval(() => {
            setSeconds((prev)=> prev + 1);
        }, 1000);
        }
        return ()=> clearInterval(interval);
    },[running])
    return (
        <div className="w-full p-2">
            <h1>سوال هفتم</h1>
            <h1 className="border w-2/12 my-2 text-center mx-auto">{seconds}</h1>
            <div className="w-4/12 text-center gap-4 mx-auto flex justify-between ">
            <button 
            onClick={()=>setRunning(true)}
            className="rounded-md bg-linear-60 from-blue-700 text-stone-100 to-purple-600 py-2 px-6">Start</button>
            <button
            onClick={()=>setRunning(false)}
            className="rounded-md bg-linear-60 from-red-600 text-stone-100 to-orange-600 py-2 px-6">Stop</button>
            </div>
        </div>
    )
}