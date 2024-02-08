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
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
