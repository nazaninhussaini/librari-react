import { useReducer, useState } from "react"

const student =[
    {
        id:1,
        name:"Nazanin",
        lastName :"Husaini",
        score: 98, 
    },
    {
        id:2,
        name:"M.soda",
        lastName :"yawari",
        score: 99, 
    },
    {
        id:3,
        name:"Raihan",
        lastName :"Amini",
        score: 88, 
    },
    {
        id:4,
        name:"Yasamin",
        lastName :"Haidary",
        score: 78, 
    },
]

export default function Q5Rdeuser(){
    const [name, setName]  = useState("");
    const [lastName,setLastName] = useState("");
    const [score,setScore] = useState(0);
    const [deta,action]= useReducer(myFunction,student);
    return (
        <div className="w-full h-screen mx-auto ">
            <input className="border py-3 px-2 focus:outline-0 rounded-md mx-2 my-5"
            placeholder="Entherd name student"
            value={name} onChange={(e)=> setName(e.target.value)}
             type="text" />
            <input className="border py-3 px-2 focus:outline-0 rounded-md mx-2 my-5"
            placeholder="Entherd lastName student"
            value={lastName} onChange={(e)=> setLastName(e.target.value)}
             type="text" />
            <input className="border py-3 px-2 focus:outline-0 rounded-md mx-2 my-5"
            placeholder="Enther Score studetnt"
            value={score} onChange={(e)=> setScore (+e.target.value)}
             type="number" />
             <button className="border rounded-md py-3 px-4">Save</button>

            <div className="w-10/12 mx-auto grid grid-cols-2 gap-3">
                {deta.map((x)=>(
                    <div key={x.id} className="py-2 px-3 flex border-white shadow-2xl rounded-md bg-gray-300 justify-center gap-3 flex-col">
                        <h1>{x.name}</h1>
                        <div className="flex justify-between items-center">
                        <p>{x.lastName}</p>
                        <p>{x.score}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
function myFunction(deta,action){}