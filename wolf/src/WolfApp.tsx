import React from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";
import Donate from "./Donate";
import Header from "./Header";

function WolfApp() {
  return (
    <div className="grid">
      <Header></Header>
      <QuestionBlocks></QuestionBlocks>
      <Tally></Tally>
      <WolfResult></WolfResult>
      <Social></Social>
      <Donate></Donate>
    </div>
  );
}

export default WolfApp;
