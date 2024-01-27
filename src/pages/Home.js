/** @format */

import React, { useCallback, useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_API_KEY; // here how to access api key from env file
console.log("api value", apiKey);

function Home() {
  const cities = ["Elazığ", "İstanbul", "Ankra", "Siirt", "Urfa"];
  const [city, setCity] = useState("istanbul");
  /* 
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
  },[location]);

  const getWeather =useCallback( () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=af541dcd3ae80fa7d3d01c6b99499e31`
    )
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  },[location])

  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);

  useEffect(()=>{
    getWeather();
  },[getWeather])

 */

  const handleCityClick = (e) => {
    console.log("value", e.target.value);
    setCity(e.target.value);
  };
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
      <div>daata iwll be here</div>
    </div>
  );
}

export default Home;
