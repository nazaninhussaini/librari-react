import { useState } from "react"

function First (){
    const [Qimat,Natija]=useState(10);
    return(
        <div className="flex justify-between p-16">
        <button onClick={()=>Natija(Qimat + 1)} className="p-4 m-20 border " >Increment</button>
        <h1>{Qimat}</h1>
        <button onClick={()=>Natija(Qimat - 1)} className= "p-4 m-20 border ">decrement</button>
        </div>
    )
}
export default First;