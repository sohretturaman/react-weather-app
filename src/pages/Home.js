/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Details from "./Details";

const apiKey = process.env.REACT_APP_API_KEY; // here how to access api key from env file
console.log("api value", apiKey);

function Home() {
  const cities = ["Elazığ", "İstanbul", "Ankra", "Siirt", "Urfa"];
  const [city, setCity] = useState("istanbul");
   const [weatherData,setWeatherData] =useState({});

   

  const [location, setLocation] = useState({

    lat: "41.0091982",
    lon: "28.9662187",
  });

  const getGeoLocation = useCallback(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=af541dcd3ae80fa7d3d01c6b99499e31`
    )
      .then((res) => res.json())
      .then((data) => setLocation({ lat: data[0]?.lat, lon: data[0]?.lon }));
  },[city]);

  const getDayOfWeek=(timestamp)=>{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(timestamp * 1000);
    const dayIndex = date.getDay(); 
    return days[dayIndex]; 
  }

  
  const getWeather =useCallback( () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=af541dcd3ae80fa7d3d01c6b99499e31&mode=json&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const dataObject ={
          day1:data.list[0],
          day2 :data.list[5],
          day3:data.list[11],
          day4:data.list[19],
          day5 :data.list[29],
          day6 :data.list[39]
        }
        
        console.log(
         dataObject
          );
          setWeatherData(dataObject?dataObject :null)

              
       
      });
  },[location])

  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);

  useEffect(()=>{
    getWeather();
  },[getWeather])

const getIconUrl =(iconCode)=>{
console.log('icon code ',iconCode);

  const url =`https://openweathermap.org/img/wn/${iconCode}@2x.png`
  return url  ; 
}

  const handleCityClick = (e) => {
    console.log("value", e.target.value);
    setCity(e.target.value);
  };

   //console.log('day1 icoon', weatherData.day1);
  return (
    <div  className='container'>
      
     
      <span>Chose your city </span>
      <br />
      <select name={city} onChange={handleCityClick}>
        {cities.map((item, index) => {
          return (
            <option
              key={index}
              value={item}
              onClick={() => console.log("turkiye has been clicked")}
            >
              {item}
            </option>
          );
        })}
      </select>
      <br /> <br />
      <br />  <br/>
      <div className="topWrapper">
         <div className="todayWrapper">
           <div> <h3>{getDayOfWeek(weatherData.day1?.dt)} </h3>   </div>
            <br/>
            <div> 
             
            <img 
      src={ getIconUrl(weatherData.day1?.weather[0].icon)}
      alt="new"
      />
            </div>
            <br/>
            <div>
              <span>  { weatherData.day1?.main.temp_min}°C</span><span>{''+''}</span>
              <span > { weatherData.day1?.main.temp_max}°C</span>
            </div>

         </div>
      </div>
     
         <div style={{flexDirection:'column',justifyContent:'space-between'}} className='innerContainer'>
         <h5> other days info  </h5>
          <div style={{flexDirection:'row'}} className='innerWrapper'>
          <Details dayInfo={getDayOfWeek(weatherData.day2?.dt)}
          iconUrl={getIconUrl(weatherData.day2?.weather[0].icon)}
          minTemp={weatherData.day1?.main.temp_min}
          maxTemp={weatherData.day1?.main.temp_max}
          />
            <Details dayInfo={getDayOfWeek(weatherData.day3?.dt)}
          iconUrl={getIconUrl(weatherData.day3?.weather[0].icon)}
          minTemp={weatherData.day3?.main.temp_min}
          maxTemp={weatherData.day3?.main.temp_max}
          />
           <Details dayInfo={getDayOfWeek(weatherData.day4?.dt)}
          iconUrl={getIconUrl(weatherData.day4?.weather[0].icon)}
          minTemp={weatherData.day4?.main.temp_min}
          maxTemp={weatherData.day4?.main.temp_max}
          />
          <Details dayInfo={getDayOfWeek(weatherData.day5?.dt)}
          iconUrl={getIconUrl(weatherData.day5?.weather[0].icon)}
          minTemp={weatherData.day5?.main.temp_min}
          maxTemp={weatherData.day5?.main.temp_max}
          />
          <Details dayInfo={getDayOfWeek(weatherData.day6?.dt)}
          iconUrl={getIconUrl(weatherData.day6?.weather[0].icon)}
          minTemp={weatherData.day6?.main.temp_min}
          maxTemp={weatherData.day6?.main.temp_max}
          />
          
          </div>
         
         </div>
    </div>
  );
}

export default Home;
