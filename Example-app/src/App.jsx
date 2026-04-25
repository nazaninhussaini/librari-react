import { useState } from "react";
import CreatForm from "./Form";
import Nav from "./Navbar";
import TodoList from "./TodoList";

function App(){
  const [showForm , setShowForm] = useState(false);
  const [list,setList] = useState([]);
  console.log(list)
  return(
    <div  className="w-full h-screen  bg-linear-90 from-gray-800 to-gray-700 f">
      <Nav showForm = {showForm} setShowForm = {setShowForm}/>
      <CreatForm list= {list} setList= {setList} showForm = {showForm} setShowForm={setShowForm}  />
    <TodoList list={list}/>
    </div>
  )
}
export default App;