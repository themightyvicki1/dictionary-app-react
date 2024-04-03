import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary{" "}
          <small>
            <i className="fa-solid fa-book"></i>
          </small>
        </h1>
        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer>
          <a
            href="https://github.com/themightyvicki1/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced coded by Victoria Greer
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
