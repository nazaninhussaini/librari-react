import Q1Rduser from "./component/useRdeuser/Q1Rduser";
import Q2Rduser from "./component/useRdeuser/Q2Rdeuser";
import Q3Rdeuser from "./component/useRdeuser/Q3Rdeuser";
import Q4Rdeuser from "./component/useRdeuser/Q4Rdeuser";

function App(){
  return(
    <div className=" mx-auto h-screen w-full bg-gray-500 text-center text-3xl p-3">
    {/* <Q1Rduser/> */}
    <Q2Rduser/>
    <Q3Rdeuser/>
    <Q4Rdeuser/>
    </div>
  )
  
}
export default App;