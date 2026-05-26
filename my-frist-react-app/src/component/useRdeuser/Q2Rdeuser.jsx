import { useReducer } from "react"
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";

const todoList =["Aday namaz","learning react codes","going to home"]
export default function Q2Rduser(){
    const [todos,dispatch]= useReducer(reducer,todoList);
    
    return(
        <div className="w-full max-w-6xl mx-auto ">
            <AddTodo todos={todos} dispatch={dispatch}/>
            <div className="p-5 grid grid-cols-2 gap-4">
                {todos.map((x,index)=>(
                   <TodoCard key={index} x={x}/> 
                ))}
            </div>
        </div>
    )
}
function reducer(deta,action){
    return [...deta , action.payload]
}