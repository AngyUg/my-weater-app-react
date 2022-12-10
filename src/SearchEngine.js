import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [text, setText] = useState({});
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showDataWeather(response) {
    setLoaded(true);
    console.log(response);
    setText({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "8f8d5f703465caae3978b75cf8f80c67";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndPoint}?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showDataWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="City..." onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div>
          <div>Temperature {Math.round(text.temperature)}°C</div>{" "}
          <div>Description: "{text.description}"</div>
          <div>Humidity: {Math.round(text.humidity)}%</div>
          <div>Wind: {text.wind}km/h</div>
          <div>
            <img src={text.icon} alt={text.description} />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
