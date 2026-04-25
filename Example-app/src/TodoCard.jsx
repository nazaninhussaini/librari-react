export default function TodoCard({todo}){
    return(
        <div className="w-full border border-teal-300 p-2 rounded-sm ">
            <p>id : {todo.id}</p>
            <h1>todo : {todo.todo}</h1>
            <p>date : {todo.date}</p>
        </div>
    )
}