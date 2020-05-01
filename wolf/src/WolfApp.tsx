import React from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";

function App() {
  return (
    <div className="grid">
      <QuestionBlocks></QuestionBlocks>
      <Tally></Tally>
      <WolfResult></WolfResult>
      <Social></Social>
    </div>
  );
}

export default App;
