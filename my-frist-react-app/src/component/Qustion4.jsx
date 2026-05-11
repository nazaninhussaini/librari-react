import { useRef, useState } from "react"

export default function Qustion4 (){
    const inputRef =  useRef(null)
    const [list,setList] = useState([])
   function handleClick(){
    setList((prev)=>[...prev , list] )
      inputRef.current.focus();
   }
    return(
        <div className="flex gap-3 w-full flex-col justify-center items-center">
            <h1>سوال ششم</h1>
            <form className="flex flex-col gap-3">
                <input ref={inputRef} className="border " placeholder="Please Writh Name...." type="text" />
                <input className="border " placeholder="Please Writh Email...." type="email" />
                <h1 className="border h-9">{list}</h1>
                <button className="border" onChange={(e)=>(e.target.value)} onClick={(handleClick)}>Save</button>
            </form>
        </div>
    )
}