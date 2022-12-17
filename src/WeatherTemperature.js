import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function convertToFaring(event) {
    event.preventDefault();
    setUnits("faring");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function faring() {
    return props.celsius * (9 / 5) + 32;
  }

  if (units === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong>
          <span className="temperature">{Math.round(props.celsius)}</span>
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
