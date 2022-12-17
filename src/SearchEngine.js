import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import background from "./backgroundImage.jpg";
import Loader from "./Loader.js";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";
import FormatDate from "./FormatDate.js";

export default function SearchEngine(props) {
  const [textWeather, setTextWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defCity);

  function showDataWeather(response) {
    console.log(response);
    setTextWeather({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
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
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="search"
            placeholder="City..."
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          {" "}
          <button type="submit" className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (textWeather.loaded) {
    return (
      <div
        className="SearchEngine"
        style={{ backgroundImage: `url(${background})` }}
      >
        {form}
        <div className="WeatherDetails">
          <div className="row">
            <div className="col-12">
              {" "}
              <h1>{textWeather.city}</h1>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-6">
              <ul>
                <div>
                  <FormatDate />
                </div>
                <div>{textWeather.description}</div>
              </ul>
            </div>
            <div className="col-6">
              <div>Humidity: {Math.round(textWeather.humidity)}%</div>
              <div>Wind: {textWeather.wind}km/h</div>
            </div>
          </div>
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div>
                <WeatherIcons code={textWeather.icon} />
              </div>
              <WeatherTemperature celsius={textWeather.temperature} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let apiKey = "8f8d5f703465caae3978b75cf8f80c67";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndPoint}?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showDataWeather);
    return (
      <div>
        <Loader />
      </div>
    );
  }
}
