import React from "react";

import WeatherIcons from "./WeatherIcons";

export default function FiveDaysFuture(props) {
  let dayOfWeek = new Date(props.days.dt * 1000).toLocaleDateString("en-us", {
    weekday: "short",
  });

  return (
    <div className="FiveDaysFuture">
      <div class="forecast-day">
        <strong>{dayOfWeek}</strong>
      </div>
      <WeatherIcons code={props.days.weather[0].icon} size="50" />
      <div class="forecast-temperature">
        <span class="forecast-temperature-max">
          <strong>{Math.round(props.days.temp.max)}° </strong>
        </span>
        <span class="forecast-temperature-min">
          {Math.round(props.days.temp.min)}°
        </span>
      </div>
    </div>
  );
}
