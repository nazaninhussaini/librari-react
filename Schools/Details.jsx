import { useParams } from "react-router-dom";
import { listStudents } from "../public/db"
import Navbar from "./Navbar";
function Details(){
    const {name} = useParams();
   const date= listStudents.find((person)=> person.name == name)
    return(
        <div className="m-20 p-4 text-2xl border bg-linear-60 from-green-500 via-green-900 to-green-700 bg-clip-text text-transparent ">
    <Navbar/>

        <h1>Name: {date.name}</h1>
        <p>Gread: {date.grade}</p>
        <p>Score: {date.score}</p>
        <p>Details:{date.detalis}</p>
        </div>
    )
}
export default Details;