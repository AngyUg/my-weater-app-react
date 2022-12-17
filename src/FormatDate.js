import React from "react";

export default function FormatDate() {
  let dayTimeNow = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return dayTimeNow;
}
