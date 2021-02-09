import React from "react";
import "./App.css";
import Machine from "./Components/Machine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DRUM MACHINE BRO!</h1>
        <div className="selector">
          <button className="selectorButton">BOX BEATS</button>
          <button className="selectorButton">SEQUENCER</button>
        </div>
        <Machine />
      </header>
    </div>
  );
}

export default App;
