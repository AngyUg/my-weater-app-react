import React from "react";

import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defCity="Barcelona" />
      </div>
    </div>
  );
}

export default App;
