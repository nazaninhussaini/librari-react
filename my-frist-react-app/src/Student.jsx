import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { listStudents } from "../public/db"
const Student = ()=>{

    return(
        <div>
            <Navbar/>
            <ol>
                {listStudents.map(person=>(
                    <li key={person.id} id = "one">
                    //  className="m-10 p-4 bg-linear-60 from-green-500 via-gray-400 to-green-700 
                    // bg-clip-text text-transparen 
                        <Link 
                        // style = {{color:"green",textDecoration:"none",fontSize:"32px"}}
                        to="">{person.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Student;