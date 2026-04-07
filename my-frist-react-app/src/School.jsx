 import { Link, useNavigate } from "react-router-dom";
import { SchoolList } from "../public/db";
import Navbar from "./Navbar";
 export default function School (){
    const naviget =  useNavigate();
    function handleClick(){
      naviget("/")
    }
    return(
      <div className="m-20 p-4 text-2xl border bg-linear-60 from-green-500 via-green-900 to-green-700 bg-clip-text text-transparent ">
        <Navbar/>
        <h1> Schools </h1>
         <button onClick={handleClick} className="text-3xl text-green-600 flex gap-5">Go to School page</button>
        <ul>
            {SchoolList.map(s =>(
                <Link className="my-8 mx-5 p-10 text-green-800 " key={s.id} to={`/school/${s.id}`}>{s.name}</Link>
            )) }
        </ul>
      </div>  
    )
}