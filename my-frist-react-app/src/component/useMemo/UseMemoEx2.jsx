import { useEffect, useState, useTransition } from "react"

export default function UseMemoEx2 (){
    const[value,setValue]= useState("");
    const[list,setlist]=useState([]);
    const [loding,startTransition]= useTransition();
    useEffect(()=>{
        const l = [];
        startTransition(()=>{
             for (let i = 0; i < 20000; i++) {
            l.push(value)   
        }
        setlist(l)
        })
    },[value])
    return(
        <div>
            <input type="text"
            className="border py-2 px-3 focus:outline-0"
            value={value} onChange={(e)=>setValue(e.target.value)} />
            <div>
                {loding ?<div>Please wait</div>: list.map((t)=>(
                <div>
                    <h1>{t}</h1>
                </div>
                ))}

            </div>
        </div>
        )
}