import { useRef, useState } from "react"

export default function Qustion6 (){
    // const lists = []
    const inputRef =  useRef(null)
    const [list,setList] = useState({name:"",email:""})
   function handleClick(){
          inputRef.current.focus();
          
   }
    return(
        <div className="flex gap-3 w-full flex-col justify-center items-center">
            <h1>سوال ششم</h1>
            <form className="flex flex-col gap-3">
                <input
                onChange={(e)=> setList({...list, name:e.target.value })}
                value={list.name}
                ref={inputRef} className="border " placeholder="Please Writh Name...." type="text" />
                <input
                value={list.email}
                onChange={(e)=> setList({...list,email:e.target.value})}
                className="border " placeholder="Please Writh Email...." type="email" />
                <h1 className="border h-9">{list.name} :: {list.email}</h1>
                <button className="border" onChange={(e)=>(e.target.value)} onClick={(handleClick)}>Save</button>
            </form>
        </div>
    )
}