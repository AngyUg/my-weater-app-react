import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function SearchEngine() {
  let [text, setText] = useState("");
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function showData(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    let units = "metric";
    let apiKey = "8f8d5f703465caae3978b75cf8f80c67";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndPoint}?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showData);

    event.preventDefault();
    setText(
      <div>
        <div>Temperature {Math.round(temperature)}°C</div>{" "}
        <div>Description: "{description}"</div>
        <div>Humidity: {Math.round(humidity)}%</div>
        <div>Wind: {wind}km/h</div>
        <div>
          {" "}
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size="50"
            animate={true}
          />
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="City..." onChange={updateCity} />
        <input type="submit" value="Search" />
        <p>{text}</p>
      </form>
    </div>
  );
}
