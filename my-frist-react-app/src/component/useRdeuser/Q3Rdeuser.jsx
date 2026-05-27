import { useReducer } from "react"

const votes = {agree:0 , disagree: 0}
export default function Q3Rdeuser(){
    const [deta,myFunc]= useReducer(func , votes);
    return(
        <div>
            <div className="w-full max-w-4xl mx-auto flex justify-center gap-4 text-stone-200">
            <h1 className="text-3xl">{deta.agree} </h1>
            <h1 className="text-3xl">{deta.disagree}</h1>
            </div>
            <div className="p-2 text-stone-200">
                <button className="py-2 px-4 ">َAgree</button>
                <button className="py-2 px-4 ">Disagree</button>
            </div>
        </div>
    )
}
function func(state,action){}