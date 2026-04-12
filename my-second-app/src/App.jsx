import { useEffect, useState } from "react";

function App(){
  const [weatherData,setWeatherData] = useState(null);
  useEffect(()=>{
   async function getWeather(){
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=684418efa9274f3ad6491868b0271123");
    const javab = await data.json();
    setWeatherData(javab);
    }
    getWeather()
  },[]);
  if(!weatherData){
    return(
      <h1 style={{fontSize:"40px",fontWeight:"bold", color:"red",padding:"12px",textAlign:"center"}}>Please a minute.....</h1>
    )
  }
  return(
    <div>

      <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"50%",height:"fit-content",padding:"20px",border:"1px solid black ",borderRadius:"5px"}}>

        </div>

      </div>

    </div>
  )
}
export default App;