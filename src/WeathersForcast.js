import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeathersForcast.css";

export default function WeathersForcast() {
  return (
    <div className="WeathersForcast">
      <div className="row">
        <div className="col">
          <div class="forecast-day">
            <strong>
              {new Date().toLocaleDateString("en-us", { weekday: "short" })}
            </strong>
          </div>
          <WeatherIcons code="11n" size="50" />
          <div class="forecast-temperature">
            <span class="forecast-temperature-max">
              <strong>15 C° </strong>
            </span>
            <span class="forecast-temperature-min">2 C°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
