import { createContext } from "react";
import Home from "./Home";
import { list } from "../db/student";
export const StudentContext = createContext();

function App(){
  const studentList = list;
  return(
    <div>
      <h1 className="w-full flex justify-center text-4xl font-medium text-gray-600 ">Home...</h1>

      <StudentContext.Provider value={studentList}>
      <Home/> 
      </StudentContext.Provider>
    </div>
  )
}
export default App;