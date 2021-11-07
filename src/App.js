import SHlogo from "./SH-logo.png";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="">
        {input !== "" ? (
          <p className="display">{input}</p>
        ) : (
          <img src={SHlogo} className="app-logo" alt="logo" />
        )}
      </header>
      <SearchBar input={input} handleChange={(e) => setInput(e.target.value)} />
      <div className="buttons">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lukcy</button>
      </div>
    </div>
  );
}

export default App;
