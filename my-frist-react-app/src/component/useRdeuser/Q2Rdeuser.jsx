import { useReducer } from "react"

const todoList =["Aday namaz","learning react codes","going to home"]
export default function Q2Rduser(){
    const [todos,dispatch]= useReducer(reducer,todoList);
    return(
        <div className="w-full max-w-6xl mx-auto">
            <input type="text" placeholder="append input" />
            <div className="p-5 grid grid-cols-2 gap-4">
                {todos.map((x)=>{
                    return(
                        
                    )
                })}
            </div>
        </div>
    )
}
function reducer(deta,action){

}