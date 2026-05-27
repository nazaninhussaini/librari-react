import { CheckSquare, LucideSquareArrowOutDownLeft } from "lucide-react";
import { useReducer } from "react"

const votes = {agree:0 , disagree:0}
export default function Q3Rdeuser(){
    const [deta,myFunc]= useReducer(func , votes);
    return(
        <div>
            <div className="w-full max-w-4xl mx-auto flex justify-center gap-7 my-2 text-stone-200 items-center">
            <h1 className="text-3xl">{deta.agree} <CheckSquare/> </h1>
            <h1 className="text-3xl">{deta.disagree} <LucideSquareArrowOutDownLeft/> </h1>
            </div>
            <div className="p-2 text-stone-200 flex gap-4 w-full mx-auto justify-center items-center my-2.5">
                <button className="py-2 px-4 rounded-md shadow-2xl bg-linear-60 from-gray-500 to-taupe-300 "
                onClick={()=>myFunc({type : "agree",payload: 1})}
                >َAgree</button>
                <button className="py-2 px-4 rounded-md shadow-2xl bg-linear-60 from-gray-500 to-taupe-300"
                 onClick={()=>myFunc({type : "disagree" ,payload:1})}
                >Disagree</button>
                {/* <button className="py-2 px-4 rounded-md shadow-2xl bg-linear-60 from-gray-500 to-taupe-300"
                onClick={()=>myFunc({type:"kahesh",payload : 1})}
                >kahesh</button>
                <button className="py-2 px-4 rounded-md shadow-2xl bg-linear-60 from-gray-500 to-taupe-300"
                onClick={()=>myFunc({type:"kahesh",payload : 1})}
                >kahesh</button> */}
            </div>
        </div>
    )
}
function func(state,action){
    switch (action.type){
        case "agree":
            return {...state, agree: state.agree+action.payload}
            break;
            
        default:
            return{...state, disagree : state.disagree + action.payload}
            break;
    }
}