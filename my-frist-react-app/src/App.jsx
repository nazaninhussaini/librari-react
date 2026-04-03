import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Services from "./Services";

function App(){
  return (
    <>
    <Navbar/>
    
    <Routers>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routers>
    <h1>this is the home page</h1>
    </>
  )
}
export default App;