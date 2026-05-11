import { useState } from "react";
import Qustion2 from "./component/Qustion2";
import Qustion3 from "./component/Qustion3";
import Qustion4 from "./component/Qustion4";

function App(){
  const [value,setValue] =  useState(0)
  return(
    <div className="w-full text-center text-2xl text-indigo-800 p-3">
      <h1>سوال اول </h1>
      <h1>{value}</h1>
      <button  onClick={()=>setValue(value + 1)}>increament</button>
      <Qustion2/>
      <Qustion3/>
      <Qustion4/>
    </div>
  )
  
}
export default App;