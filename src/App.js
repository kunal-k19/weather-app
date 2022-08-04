
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import {useState} from "react";
import * as WeatherIcon from "react-icons/wi";
import "./App.css";



function App() {

  const apiKey = '50ac4dd4f6375cc8beb99bdb3e29da0a';
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) =>{
    if(event.key === "Enter"){
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID="+apiKey).then(res => res.json()).then(data => {setWeather(data)})
    }

  }

  
  
  return (
    <>
    <div className="container">
      <input placeholder="Enter City" 
      className="input"
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      
    
    {typeof weather.main === "undefined" ? (
      <div>
        <p>Welcome to the weather app</p>
      </div>
    ) : (
      <>
      <div className="image"><img src={"https://source.unsplash.com/500x500/?" + city }/></div>
      <div className="weather-data" >
        
        
        <p className="city">{weather.name}, {weather.sys.country}</p>
        <p className="temp">{weather.main.temp}°C</p>
        <p className="weather">{weather.weather[0].main}</p>
      
        
        
      </div>
      </>
    )}
    {weather.cod === "404" ? (
        <p>City Not Found</p>
      ) : (
        <></>
      )}
      
    </div>
    </>
  );
}

export default App;
