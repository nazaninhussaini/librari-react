import { useContext } from "react"
import { DetaContext } from "../App"

export default function D(){
    const deta =  useContext(DetaContext);
    return (
        <div>
            <h1 className="bg-linear-60 from-pink-400 to-purple-500 bg-clip-text text-transparent p-2">This is the D page</h1>
            <input className="border-2 border-pink-700 text-2xl rounded-sm  text-pink-600 hover: outline-0"
             type="text" placeholder="Add Text........." value={deta.value} 
            onChange={(e)=>deta.setValue({type:"change", payload: e.target.value})} />

              {/* function reduser (state,func){
    if(func.type === "change"){
       return state = func.payload;
    }
  }
  const [value,func] = useReducer(reduser, ""); 
  return(
    <div className="w-full text-3xl text-center p-4 bg-gray-300 h-screen ">
      <h1 className="bg-linear-60 from-pink-400 to-purple-500 bg-clip-text text-transparent p-2">This is the app page</h1>
      <h1 className="bg-linear-60 from-pink-400 to-purple-500 bg-clip-text text-transparent p-2">This is the input value : {value} </h1>
      <DetaContext.Provider value={{value: value , setValue : func}}>
        <A/>
      </DetaContext.Provider>
    </div> */}
        </div>
    )
}