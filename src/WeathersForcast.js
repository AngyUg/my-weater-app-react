import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcons from "./WeatherIcons";
import "./WeathersForcast.css";
import SpinerColorRing from "./SpinerColorRing";

export default function WeathersForcast(props) {
  const [ready, setRedy] = useState(false);
  const [forecastDetailsDaily, setForcastDetailsDaily] = useState("");

  useEffect(() => {
    setRedy(false);
  }, [props.lon, props.lat]);

  function handleResponse(response) {
    setRedy(true);
    console.log(response);
    console.log("1");

    setForcastDetailsDaily(response.data.daily);
  }

  function getPointByCoords() {
    let lon = props.lon;
    let lat = props.lat;
    console.log(lat, lon);
    let units = "metric";
    //key for future 5 days weather
    //let apiKey = "562f5cd9cac04a0ceac338ac4e531d8c";
    /* let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";*/
    let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/onecall";
    let apiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    console.log("get url" + apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    console.log(forecastDetailsDaily);
    return (
      <div className="WeathersForcast">
        <div className="row">
          {forecastDetailsDaily.map(function (forecastFutureDays, index) {
            if (index < 6 && index != 0) {
              return (
                <div className="col" key={index}>
                  <div class="forecast-day">
                    <strong>
                      {new Date(
                        forecastFutureDays.dt * 1000
                      ).toLocaleDateString("en-us", {
                        weekday: "short",
                      })}
                    </strong>
                  </div>
                  <WeatherIcons
                    code={forecastFutureDays.weather[0].icon}
                    size="50"
                  />
                  <div class="forecast-temperature">
                    <span class="forecast-temperature-max">
                      <strong>
                        {Math.round(forecastFutureDays.temp.max)} C°{" "}
                      </strong>
                    </span>
                    <span class="forecast-temperature-min">
                      {Math.round(forecastFutureDays.temp.min)} C°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getPointByCoords();
    return (
      <div className="colorRing">
        <SpinerColorRing /> <SpinerColorRing /> <SpinerColorRing />{" "}
        <SpinerColorRing /> <SpinerColorRing /> ;
      </div>
    );
  }
}
