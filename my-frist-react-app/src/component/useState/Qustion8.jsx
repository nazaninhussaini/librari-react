import { useRef, useState } from "react"

export default function Qustion8(){
   const [number,setNumber]= useState({num1 : 0,num2:0});
   const [result,setResult] = useState(null);
   const ref =  useRef(0);
   function handalClick (){
    setResult(number.num1 + number.num2);
    ref.current ++ ;
   }
    return(
        <div>
            <h1>سوال هشتم</h1>
            <div className="flex justify-center items-center w-full gap-2.5">
            <input
            value={number.num1}
            onChange={(e)=> setNumber({...number,num1:Number(e.target.value)})}
            className="border" type="number" placeholder="Number1" />
            <input
            value={number.num2}
             onChange={(e)=> setNumber({...number,num2:Number(e.target.value)})}
            className="border" type="number" placeholder="Number2" />
            <button className="border p-2" onClick={handalClick}>Colculeter</button>
            </div>
            <h1 className="text-red-600">{result}</h1>
            <h1>You used this calculator <span className="text-red-500">{ref.current} </span>times</h1>
        </div>
    )
}