import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function SpinerColorRing() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#B3526B", "#4589BA", "#EDF2F2", "#3081BA", "#E3D3DE"]}
    />
  );
}
