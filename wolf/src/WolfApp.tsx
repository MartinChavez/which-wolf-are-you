import React, { useState } from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";
import Donate from "./Donate";
import Header from "./Header";
import { ThemeInfo, themes } from "./ThemeContext";

export let ThemeContext: React.Context<ThemeInfo>;

function WolfApp() {
  const [theme, setTheme] = useState(themes.day);
  ThemeContext = React.createContext(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="grid" style={{ background: theme.background }}>
        <Header setTheme={setTheme}></Header>
        <QuestionBlocks></QuestionBlocks>
        <Tally></Tally>
        <WolfResult></WolfResult>
        <Social></Social>
        <Donate></Donate>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
