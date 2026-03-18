import Hero from "./Header";
function App (){
  let name = "nazanin"
  let lastName = "Hussaini"
  let age = 18;
  <>
  <h1>
    {" "}
    Hi Iam {name} my last name {lastName} iam {age} years old
  </h1>
  <Hero name="Mohammad" lastName= "Husaaini" />
  <Hero name="Ali" lastName= "Khamosh" />
  <Hero name="Ahmad" lastName= "Sadat" />
  <Hero name="Farid" lastName= "Khorami" />
  </>
}
export default App;
