import { CheckSquare, Trash2 } from "lucide-react";

export default function TodoCard({todo ,list ,setList}){
    function handalClick(id){
      setList((prev)=> prev.map(
    (x)=>x.id == id ? {...x,completed :!x.completed}:x));
    }
function handelDelete(id){
    setList((prev)=> prev.filter((y)=> y.id !== id));
}
    return(
        <div className="relative">
        <div className="w-full border border-teal-300 p-2 rounded-sm ">
            {/* <p>id : {todo.id}</p> */}
            <h1 className="text-3xl font-normal" class = {todo.completed ? "cssText =  underline 3xl": "" }
            >todo : {todo.todo}</h1>
            <div className="w-full flex justify-between items-center mt-2 ">
            <p className="text-xl font  ">date : {todo.date}</p>
            <div className="flex gap-2      ">
            <button onClick={()=> handelDelete(todo.id)}>
                <Trash2 size={24}/>
            </button>
            <button onClick={()=> handalClick(todo.id)}>
                <CheckSquare size={24}/>
            </button>
            </div>

            </div>
        </div>
        <div className="w-full px-6 py-3 text-xl flex fixed bottom-0 left-0  bg-linear-90 from-gray-800 to-gray-600 justify-between items-center">
            <h1>Total</h1>
            <p>{list.length}</p>
        </div>
        </div>
    )
}