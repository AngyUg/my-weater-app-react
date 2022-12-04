import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}

export default App;
