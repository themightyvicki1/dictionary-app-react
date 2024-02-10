import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
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
          Open
          source
          coded
          by
        >
          Open sourced coded by
        </a>{" "}
        Victoria Greer{" "}
        <small>
          <i className="fa-regular fa-heart"></i>
        </small>
      </footer>
    </div>
  );
}

export default App;
