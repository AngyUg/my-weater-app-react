import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("metric");
  function convertToFaring(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function faring() {
    return props.temp * (9 / 5) + 32;
  }

  if (units === "metric") {
    return (
      <div className="WeatherTemperature">
        <strong>
          <span className="temperature">{Math.round(props.temp)}</span>
        </strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFaring}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong>
          <span className="temperature">{Math.round(faring())}</span>
        </strong>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
