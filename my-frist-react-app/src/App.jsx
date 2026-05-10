import { createContext, useReducer } from "react";
import A from "./component/A";

export const DetaContext = createContext();

function App(){
  function reduser (state,func){
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
    </div>
  )
}
export default App;