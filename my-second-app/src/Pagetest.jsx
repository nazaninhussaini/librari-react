import { useEffect, useState } from "react"

export default function Pagetest(){
   let [color,setColor] = useState("white");
   useEffect(()=>{
    document.body.style.backgroundColor = "greenyellow";
   },[color])
 return(
    <div>
        <button onClick={()=> setColor(color = "black")}
            style={{fontSize:"28px",padding:"10px" , border:"1px solid black", borderRadius:"5px" ,margin:"20px"}}
            >Color Chenged</button>
        {/* <button
        onClick={()=> setColor("green")}
        style={{fontSize:"28px",padding:"12px" , border:"1px solid black",margin:"20px"}}>cheng the backgroundColor </button> */}
    </div>
 )
}