import { useReducer } from "react"
import TodoCard from "./TodoCard";

const todoList =["Aday namaz","learning react codes","going to home"]
export default function Q2Rduser(){
    const [todos,dispatch]= useReducer(reducer,todoList);
    
    return(
        <div className="w-full max-w-6xl mx-auto ">
            <input
            className="w-1/2 border-stone-800 text-white shadow-2xl p-3 rounded-md"
            type="text" placeholder="What's in your mind" />
            <button className="py-3 shadow-2xl mx-3 px-5 border-white rounded-md text-stone-200 bg-linear-60 from-green-400 to-amber-900 ">Save</button>
            <div className="p-5 grid grid-cols-2 gap-4">
                {todos.map((x)=>(
                   <TodoCard x={x}/> 
                ))}
            </div>
        </div>
    )
}
function reducer(deta,action){

}