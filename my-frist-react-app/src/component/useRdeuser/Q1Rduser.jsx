import { useReducer } from "react"
const info =({name:"",email:""});
function reducer(){}
export default function Q1Rduser (){
    const [deta,action] = useReducer(reducer,info);
    return(
        <div className="flex flex-col gap-4 w-1/2 items-center ">
            <h1 className="text-3xl font-medium text-amber-50">Qustion one Rduser</h1>
            <input
            value={deta.name}
            onChange={(e)=>action({type:"name", payload:e.target.value})}
            className="text-2xl py-2 font-bold border rounded-md border-white shadow-2xl focus:outline-0 " 
            placeholder="please writh name...."
            type="text" />
            <input 
            value={deta.email}
            onChange={(e)=>action({type:"email", payload:e.target.value})}
            className="text-2xl py-2 font-bold border rounded-md border-white shadow-2xl focus:outline-0 " 
            placeholder="please writh email...."
            type="email" />
            
        </div>
    )
}