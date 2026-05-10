import { createContext } from "react";
import A from "./component/A";

function App(){
  const DetaContext = createContext()
  return(
    <div>
      <DetaContext.Provider>
        <A/>
      </DetaContext.Provider>
    </div>
  )
}
export default App;