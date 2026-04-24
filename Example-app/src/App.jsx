import { useState } from "react";
import CreatForm from "./Form";
import Nav from "./Navbar";

function App(){
  const [showForm , setShowForm] = useState(false);
  const [list,setList] = useState([]);
  return(
    <div  className="w-full h-screen  bg-linear-90 from-gray-800 to-gray-700 f">
      <Nav showForm = {showForm} setShowForm = {setShowForm}/>
      <CreatForm showForm = {showForm} setList= {setList} />
    </div>
  )
}
export default App;