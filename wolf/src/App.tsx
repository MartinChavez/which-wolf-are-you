import React from "react";
import "./App.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";

function App() {
  return (
    <div className="grid">
      <QuestionBlocks></QuestionBlocks>
      <Tally></Tally>
    </div>
  );
}

export default App;
