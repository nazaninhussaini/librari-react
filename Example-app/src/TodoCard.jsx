import { CheckSquare, Trash2 } from "lucide-react";

export default function TodoCard({todo ,list ,setList}){
    function handalClick(id){
      const dontTodo = list.find((x)=> x.id == id).completad = true;  
      setList((prev)=>[...prev,dontTodo])
    }
    return(
        <div className="w-full border border-teal-300 p-2 rounded-sm ">
            {/* <p>id : {todo.id}</p> */}
            <h1 className="text-2xl font-normal">todo : {todo.todo}</h1>
            <div className="w-full flex justify-between items-center mt-2 ">
            <p className="text-xl font  ">date : {todo.date}</p>
            <div className="flex gap-2 ">
            <button><Trash2 size={24}/></button>
            <button onClick={()=> handalClick(todo.id)}><CheckSquare size={24}/></button>
            </div>

            </div>
        </div>
    )
}