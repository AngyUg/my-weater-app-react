import React from "react";
import { Dna } from "react-loader-spinner";

export default function Loader() {
  return (
    <Dna
      visible={true}
      height="190"
      width="190"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}
