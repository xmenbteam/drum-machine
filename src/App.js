import React, { useState } from "react";
import "./App.css";
import Machine from "./Components/Machine";
import Sequencer from "./Components/Sequencer";
import Footer from "./Components/Footer";

function App() {
  const [component, setComponent] = useState("box");
  const handleClick = (val) => {
    setComponent(val);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DRUM MACHINE BRO!</h1>
        <div className="selector">
          <button className="selectorButton" onClick={() => handleClick("box")}>
            BOX BEATS
          </button>
          <button className="selectorButton" onClick={() => handleClick("seq")}>
            SEQUENCER
          </button>
        </div>
        {component === "box" ? <Machine /> : <Sequencer />}
      </header>
      <Footer />
    </div>
  );
}

export default App;
