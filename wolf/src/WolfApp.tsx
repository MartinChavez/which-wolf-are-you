import React from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";

function App() {
  return (
    <div className="grid">
      <QuestionBlocks></QuestionBlocks>
      <Tally></Tally>
      <WolfResult></WolfResult>
    </div>
  );
}

export default App;
