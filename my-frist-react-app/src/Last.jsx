import { useContext } from "react"
import { LastContext } from "./App";

export default function Last(){
    const Last = useContext(LastContext);
    return(
        <div>
        <h1 className="w-fit h-fit text-transparent bg-clip-text text-2xl bg-blue-500 ">My lastName is {Last}</h1>
        </div>
    )
}