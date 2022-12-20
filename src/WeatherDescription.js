import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-12">
          {" "}
          <h1>{props.data.city}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <div>
              <FormatDate />
            </div>
            <div>{props.data.description}</div>
          </ul>
        </div>
        <div className="col-6">
          <div>Humidity: {Math.round(props.data.humidity)}%</div>
          <div>Wind: {props.data.wind}km/h</div>
        </div>
      </div>
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <div>
            <WeatherIcons code={props.data.icon} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
