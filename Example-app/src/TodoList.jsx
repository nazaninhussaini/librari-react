import TodoCard from "./TodoCard";

export default function TodoList ({list}){
    return(
        <div className="w-full max-w-5xl py-30 h-screen mx-auto text-teal-400 flex flex-col gap-7">
            {list.map(x =>(
              <TodoCard todo={x}/>
            ))}
        </div>

        
    )
}