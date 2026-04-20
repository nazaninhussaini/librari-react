import { Cloud, CloudDrizzle, CloudFog, CloudRain, CloudSun, Snowflake, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function App(){
  const [weatherData,setWeatherData] = useState(null);
  const [cityName,setCityName] = useState("Kabul");
  const [isButtonClicked,setIsButtonClicked]= useState(false)
  const [hour ,setHour] = useState(" ");
  const [minute ,setMinute] = useState(" ");
  const [seconds ,setSeconds] = useState(" ");

  const [sunSetHour,setSunSetHour] = useState("");
  const [sunSetMinute,setSunSetMinute] = useState("");
  const [sunSetSeconds,setSunSetSeconds] = useState("");

  function handelClick(){
    setIsButtonClicked(!isButtonClicked)
  }
  useEffect(()=>{
   async function getWeather(){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=684418efa9274f3ad6491868b0271123`);
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
  },[isButtonClicked]);
  if(!weatherData){
    return(
      <h1 style={{fontSize:"40px",fontWeight:"bold", color:"red",padding:"12px",textAlign:"center"}}>Please with a minute.....</h1>
    )
  }
  return(
    <div>

      <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",gap:"10px" ,justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"50%",display:"flex" ,gap:"5px"}}>
        <input type="text" style={{border:"1px solid black",width:"100%"}}
        value={cityName} onChange={(e)=>setCityName(e.target.value)}
        />
        <button style={{padding:"6px 12px" ,backgroundColor:"blue",borderRadius:"5px", color:"white",border:"none" }} 
        onClick={handelClick}
        >Search</button>
      </div>
      {/* Icons for weather */}
        <div style={{width:"50%",height:"fit-content",padding:"20px",border:"1px solid black ",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"2px 2px 10px black"}}>
          <div>
          {weatherData.weather[0].main=== "Clear"?(<Sun size={42} style={{color:"yellow"}}/>):
          weatherData.weather[0].main === "Clousd"?(<Cloud size={42} />):
          weatherData.weather[0].main === "Thunderstorm"?(<CloudSun size={42}/>) :
          weatherData.weather[0].main === "Drizzle"? (<CloudDrizzle size={42}/>):
          weatherData.weather[0].main === "Rain" ? (<CloudRain size={42}/>):
          weatherData.weather[0].main === "Snow" ?(<Snowflake size={42}/>):
          weatherData.weather[0].main === "Fog" ? (<CloudFog size={42}/>):""}
        </div>
        {/* for details , sunrise sunset tempritur humidity */}
        <div style={{display:"flex",flexDirection:"column" , alignItems:"center", justifyContent:"center",gap:"10px",width:"100%" }}>
          <h1 style={{textAlign:"center"}}>{cityName} Center</h1>
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}> 
          <p style={{display:"flex" , gap:"8px"}}>
            <span>Tempreture</span>
            <span>{weatherData.main.temp}°C</span>
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

    </div>
  )
}
export default App;