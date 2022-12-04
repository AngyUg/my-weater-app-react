import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchEngine />
          <a
            className="App-link"
            href="https://github.com/AngyUg/my-weater-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            go to GitHub repo...
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
