import { useRef, useState } from "react"

export default function App(){
  const [v,setv] = useState(1);
  const h1 = useRef(0)
  function clickMe(){
    setv(v + 1)
  }
  function ClickNow(){
    h1.current++
  }
  return(
  <div>
    <div 
    className="w-full h-screen m-4 flex justify-center items-center flex-col "
    >
      <div className="flex gap-2.5">
      <h1 className="text-3xl">{v}</h1>
      <button onClick={clickMe}
      className=" p-4 text-2xl font-medium bg-linear-90 rounded-sm from-orange-400 to-red-600 text-white"
      >Add</button>
      </div>
      <div className="flex gap-2.5"> 
        <h1 className="text-2xl">{h1.current}</h1>
        <button 
        className="p-2 text-2xl font-medium  bg-amber-500 text-white"
       onClick={ClickNow}>Click me</button>
      </div>
    </div>
  </div>)
}