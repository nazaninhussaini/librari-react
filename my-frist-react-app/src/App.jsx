import { createContext, useState } from "react"
import Details from"./Details"
import Last from "./Last";
export const LastContext =  createContext();
export default function App(){
  const [name,setName] = useState("Nazanin")
  const LastName = "Hussaini"
  return(

    <div className="w-full h-screen flex items-center my-5 gap-4 flex-col">
      <h1 className="text-3xl p-4 text-fuchsia-700">Hi This page for me Details! </h1>
      <Details Myname= {name}/>
      <LastContext.Provider value={LastName}>
        <Last/>
      </LastContext.Provider>
      
    </div>
  )
}