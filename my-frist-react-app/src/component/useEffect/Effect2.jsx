import { useEffect, useState } from "react"

export default function Effect2 (){
    const [ranning,setRunning] = useState(false);
    const [seconds,setSeconds]= useState(10);
    const [myChois,setMyChois] = useState(0);
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
    },[ranning,seconds]);
    function func(){
        setSeconds(myChois)
    }
    return(
        <div>
            <div className=" w-full flex justify-center bg-linear-60 from-blue-300 text-white via-gray-400 to-red-500">
                <div className="border w-full px-4 py-3 flex flex-col gap-3 ">
                <h1 className="text-center pb-3">Qustion 2</h1>
                <div className="flex justify-center text-center gap-2 ">
                <input value={myChois}
                onChange={(e)=>setMyChois(Number(e.target.value))}
                type="number" className="border rounded-sm p-2 focus:outline-0 cursor-pointer" placeholder="Please Set Number" />
                <button 
                onClick={func}
                className="border p-2 ">Set Number</button>
                </div>
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