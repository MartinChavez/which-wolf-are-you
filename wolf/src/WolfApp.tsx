import React, { useContext } from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";
import Donate from "./Donate";
import Header from "./Header";
import { ThemeContext } from "./index";

function WolfApp() {
  const theme = useContext(ThemeContext);
  return (
    <div className="grid" style={{ background: theme.background }}>
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
