import React from "react";

import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defCity="Barcelona" />
        <footer>
          <div className="row">
            <div className="col-2">Coded by</div>
            <div className="col-2">
              <a
                href="https://www.linkedin.com/in/angelina-yuga-226929187/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angelina Yuga
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://github.com/AngyUg/my-weater-app-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
