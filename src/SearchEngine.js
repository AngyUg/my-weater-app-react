import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [text, setText] = useState({});
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);

  let dayTimeNow = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  function showDataWeather(response) {
    setLoaded(true);
    console.log(response);
    setText({
      city: response.data.name,
      country: response.data.sys.country,
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
      <div class="row">
        <div class="col-9">
          <input
            className="form-control"
            type="search"
            placeholder="City..."
            onChange={updateCity}
          />
        </div>
        <div class="col-3">
          {" "}
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <div className="row">
          <div className="col-12">
            {" "}
            <h1>
              {text.city}, {text.country}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <div>Today is {dayTimeNow}</div>
              <div>{text.description}</div>
            </ul>
          </div>
          <div className="col-6">
            <div>Humidity: {Math.round(text.humidity)}%</div>
            <div>Wind: {text.wind}km/h</div>
          </div>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={text.icon} alt={text.description} />
            <span className="temperature">
              {Math.round(text.temperature)}°C
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
