import { useReducer } from "react";
let intialValue = 0;
function reducer (state,action){
  if(action.type === "increament"){
    return state + 1;
  }
  else if(action.type === "delete"){
    return state = intialValue;
  }
  else{
    return state - 1;
  }
}
function App(){
  const [state,func] = useReducer(reducer,intialValue);
  return(
  <div className="w-full flex justify-center py-3  ">
      <div className="flex w-40 justify-center gap-3 flex-col">
      <button 
      className=" rounded-sm p-3 font-normal text-xl text-stone-100 bg-linear-60 from-amber-400 to-red-500 "
      onClick={()=>func({type:"increament"})}>Increament</button>
      <h1 className="text-center text-xl">{state}</h1>
      <button className=" text-xl font-normal bg-linear-60 from-amber-400 to-red-500 text-stone-100 rounded-sm p-3 "
       onClick={()=>func({type :"decrement"})}>Decreament</button>
      <button className=" text-xl font-normal bg-linear-60 from-amber-400 to-red-500 text-stone-100 rounded-sm p-3 "
       onClick={()=>func({type :"delete"})}>Reset</button>
      </div>
    </div>
  )
}
export default App;