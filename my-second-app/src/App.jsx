import { Cloud, CloudDrizzle, CloudFog, CloudRain, CloudSun, Snowflake, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function App(){
  const [weatherData,setWeatherData] = useState(null);
  const [hour ,setHour] = useState(" ");
  const [minute ,setMinute] = useState(" ");
  const [seconds ,setSeconds] = useState(" ");

  const [sunSetHour,setSunSetHour] = useState("");
  const [sunSetMinute,setSunSetMinute] = useState("");
  const [sunSetSeconds,setSunSetSeconds] = useState("");


  useEffect(()=>{
   async function getWeather(){
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kabul&units=metric&appid=684418efa9274f3ad6491868b0271123");
    const javab = await data.json();
    setWeatherData(javab);

    // Sun rise data
    const sunRiseDate = new Date(javab.sys.sunrise * 1000);
    const sunRiseHour = sunRiseDate.getHours();
    const sunRiseMinute = sunRiseDate.getMinutes();
    const sunRiseSeconds = sunRiseDate.getSeconds();
    setMinute(sunRiseMinute);
    setSeconds(sunRiseSeconds);
    setHour(sunRiseHour);
    // sun set data
       const sunSetDate = new Date(javab.sys.sunset * 1000);
    const sunSetHour = sunSetDate.getHours();
    const sunSetMinute = sunSetDate.getMinutes();
    const sunSetSeconds = sunSetDate.getSeconds();
    setSunSetHour(sunSetHour);
    setSunSetMinute(sunSetMinute);
    setSunSetSeconds(sunSetSeconds);

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
        <div style={{width:"50%",height:"fit-content",padding:"20px",border:"1px solid black ",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{width:"50%"}}>
          {weatherData.weather[0].main=== "Clear"?(<Sun size={42} style={{color:"yellow"}}/>):
          weatherData.weather[0].main === "Clousd"?(<Cloud size={42} />):
          weatherData.weather[0].main === "Thunderstorm"?(<CloudSun size={42}/>) :
          weatherData.weather[0].main === "Drizzle"? (<CloudDrizzle size={42}/>):
          weatherData.weather[0].main === "Rain" ? (<CloudRain size={42}/>):
          weatherData.weather[0].main === "Snow" ?(<Snowflake size={42}/>):
          weatherData.weather[0].main === "Fog" ? (<CloudFog size={42}/>):""}
        </div>
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}> 
          <p style={{display:"flex" , gap:"8px"}}>
            <span>Tempreture</span>
            <span>{weatherData.main.temp}°</span>
          </p>
          <p style={{display:"flex",gap:"8px"}}>
            <span>Humidity</span>
            <span>{weatherData.main.humidity}%</span>
          </p>
        </div>
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
          <p style={{display:"flex",gap:"8px"}}>
            <span>SunRise</span>
            <span>{hour}:{minute}:{seconds}</span>
          </p>
          <p style={{display:"flex",gap:"8px"}}>
            <span>SunSet</span>
            <span>{sunSetHour}:{sunSetMinute}:{sunSetSeconds}</span>
          </p>
        </div>
        </div>

      </div>

    </div>
  )
}
export default App;