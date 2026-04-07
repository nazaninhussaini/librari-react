import { useParams } from "react-router-dom"
import { SchoolList } from "../public/db"
import Navbar from "./Navbar";
export default function SchoolDetails(){
   const {id} = useParams();
   const deta = SchoolList.find(School => School.id == id)
    return(
        <div className="m-20 p-4 text-2xl border bg-linear-60 from-green-500 via-green-900 to-green-700 bg-clip-text text-transparent ">
            <Navbar/>
            <h1>this is a school details page</h1>
            <h1>School Name:{deta.name}</h1>
            <p>School Maneger : {deta.manager}</p>
            <p>school Details : {deta.details}</p>
        </div>
    )
}