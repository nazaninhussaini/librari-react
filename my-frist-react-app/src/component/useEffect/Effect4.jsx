import { useEffect, useState } from "react"
import UserCard from "./UserCard";

export default function Effect4 (){
    const[users,setUsers] = useState([])
    useEffect(()=>{
        async function getUsers(){
        const deta = await fetch("https://jsonuplaceholder.typicode.com/users");
        const jawab = await deta.json()
        setUsers(jawab)
        }
        getUsers()
    },[])
    return (
        <div className="w-full min-h-screen">
            <h1>Qustion 4</h1>
            <div className="w-full max-w-6xl mx-auto">
                <div>
                    {setUsers.length > 0 && setUsers.map((user) => (
                       <UserCard/>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}