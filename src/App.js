import React from "react";

import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defCity="Barcelona" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/angelina-yuga-226929187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angelina Yuga
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/AngyUg/my-weater-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
