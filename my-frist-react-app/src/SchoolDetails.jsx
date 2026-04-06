import { useParams } from "react-router-dom"
import { SchoolList } from "../public/db"
export default function SchoolDetails(){
   const {id} = useParams();
   const deta = SchoolList.find(School => School.id == id)
    return(
        <div>
            <h1>this is a school details page</h1>
            <h1>School Name:{deta.name}</h1>
            <p>School Maneger : {deta.manager}</p>
            <p>school Details : {deta.details}</p>
        </div>
    )
}