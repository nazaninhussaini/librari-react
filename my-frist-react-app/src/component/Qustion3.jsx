import { useRef } from "react"

export default function Qustion3 (){
    const menRef =  useRef(null)
    function handelClick(){
        menRef.current.focus();
    }
    return (
        <div className="w-full p-3 gap-2 justify-center items-center flex flex-col ">
            <h1>سوال سوم</h1>
            <input ref={menRef} className="border" type="text" />
            <button onClick={handelClick} >Click Me</button>
        </div>
    )
}