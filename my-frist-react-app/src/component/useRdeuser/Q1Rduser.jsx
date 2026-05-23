import { useReducer } from "react"
const info = {name:"",email:""};
function reducer(deta , func){
    switch(func.type){
        case "name":
            return {...deta, name: func.payload}
            break;
        default:
            return{...deta, email: func.payload}
    }
}
export default function Q1Rduser (){
    const [deta,action] = useReducer(reducer, info);
    return(
        <div className="flex flex-col gap-4 w-1/2 items-center ">
            <h1 className="text-3xl font-medium">Qustion one Rduser</h1>
            <input
            value={deta.name}
            onChange={(e)=>action({type:"name" , payload:e.target.value})}
            className="text-2xl py-2 font-bold border rounded-md border-white shadow-2xl focus:outline-0 " 
            placeholder="please writh name...."
            type="text" />
            <input 
            value={deta.email}
            onChange={(e)=>action({type:"email", payload:e.target.value})}
            className="text-2xl py-2 font-bold border rounded-md border-white shadow-2xl focus:outline-0 " 
            placeholder="please writh email...."
            type="email" />
            <h2 className="text-3xl font-bold text-center">Your name is : {deta.name}</h2>
            <h1 className="text-3xl font-bold text-center">Your email address is: {deta.email}</h1>
        </div>
    )
}