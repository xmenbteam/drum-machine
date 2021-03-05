import "../App.css";
import React, { useState } from "react";

const Sequencer = () => {
  const semiQuavers = 16;
  const beatsPerBar = 4;
  const barPhrase = 1;
  const totalSemis = semiQuavers * barPhrase;
  const totalBeats = beatsPerBar * barPhrase;

  const [currentStepID, setCurrentStep] = useState(null);

  const trackListProps = {
    currentStepID,
  };

  return <div className="seqBox"></div>;
};

export default Sequencer;
