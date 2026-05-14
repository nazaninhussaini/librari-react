import { useEffect, useState } from "react"

export default function Effect2 (){
    const [ranning,setRunning] = useState(false);
    const [seconds,setSeconds]= useState(10);
    useEffect(()=>{
        let interval =null;
        if(seconds<=0){
        //  const alarm = new Audio("");
        //  alarm.play();
        //  clearInterval(i)
         return;

        }
        if(ranning){
        interval = setInterval (()=>{
            setSeconds((prev) => prev - 1)
        },1000)}
        return ()=> clearInterval(interval)
    },[ranning,seconds])
    return(
        <div className="border bg-linear-60 from-blue-400 via-purple-500 p-3 text-transparent bg-clip-text to-black">
            <div className="border w-full h-fit flex justify-center">
                <div className="border w-1/2 p-4 ">
                <h1>{seconds}</h1>
            <div className="flex w-full justify-between ">
                    <button onClick={()=> setRunning(true)} className="py-2 px-5 bg-blue-500 text-white rounded-sm cursor-pointer">Start</button>
                    <button onClick={()=> setRunning(false)} className="py-2 px-5 bg-red-500 text-white rounded-sm cursor-pointer">Stop</button>
                </div>
                </div>
            </div>
        </div>
    )
}