 import { Link } from "react-router-dom";
import { SchoolList } from "../public/db";
 export default function School (){

    return(
      <div>
        <h1>this is a details for Schools </h1>
        <ul>
            {SchoolList.map(s =>(
                <Link key={s.id} to={``}>{s.name}</Link>
            )) }
        </ul>
      </div>  
    )
}