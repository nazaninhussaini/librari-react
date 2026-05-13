import { useState } from "react";
import Qustion2 from "./component/useState/Qustion2";
import Qustion3 from "./component/useState/Qustion3";
import Qustion6 from "./component/useState/Qustion6";
import Qustion7 from "./component/useState/Qustion7";
import Qustion8 from "./component/useState/Qustion8";


function App(){
  const [value,setValue] =  useState(0)
  return(
    <div className="w-full text-center text-2xl text-indigo-800 p-3">
      <h1>سوال اول </h1>
      <h1>{value}</h1>
      <button  onClick={()=>setValue(value + 1)}>increament</button>
      <Qustion2/>
      <Qustion3/>
      <Qustion6/>
      <Qustion7/>
      <Qustion8/>
          </div>
  )
  
}
export default App;