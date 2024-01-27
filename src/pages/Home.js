/** @format */

import React, { useCallback, useEffect, useState } from "react";


function Home() {
  const cities = ["Elazığ", "İstanbul", "Ankra", "Siirt", "Urfa"];
  const [city,setCity] =useState("istanbul");

const getWeather = useCallback(()=>{
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=57adf1a8c2c34be34a149e59c4461094`)
    .then((res)=>res.json())
    .then((data)=>console.log(data[0].lat,data[0].lon))
})
  useEffect(()=>{
    getWeather();
  },[getWeather])

  const handleCityClick=(e)=>{
    console.log('value', e.target.value);
    setCity(e.target.value)
   }

  return (
    <div>
      data to display
      <span>Chose your country </span>
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
      <br />a list of componets in each componet a day info icon info temp info
      <div>
          daata iwll be here 
      </div>
    </div>
  );
}

export default Home;
