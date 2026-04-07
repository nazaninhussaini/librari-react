import { useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Services from "./Services";

function App(){
  const navigate =  useNavigate()
  function handleClick (){
    navigate("/student")
    navigate("/school")
  }
  return (
    <>
    <Navbar/>
    
   
    <h1 className="text-5xl border bg-linear-60 from-green-500 via-gray-400 to-green-700
    bg-clip-text text-transparent py-4 mx-auto w-fit 
    ">this is the Home page</h1>
    <button onClick={handleClick} className="text-3xl text-green-600 p-4 m-8">Go to Student page</button>
    <button onClick={handleClick} className="text-3xl text-green-600 flex gap-5">Go to School page</button>

    </>
  )
}
export default App;