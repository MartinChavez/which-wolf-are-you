import React, { useState, useMemo } from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";
import Donate from "./Donate";
import Header from "./Header";
import { ThemeContext, themes } from "./ThemeContext";
import { getSessionQuestionsAnswers } from "./Questions";

function WolfApp() {
  const questionsAnswers = getSessionQuestionsAnswers();
  const [theme, setTheme] = useState(themes.day);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="grid" style={{ background: theme.background }}>
        <Header setTheme={setTheme}></Header>
        <QuestionBlocks questionsAnswers={questionsAnswers}></QuestionBlocks>
        <Tally></Tally>
        <WolfResult></WolfResult>
        <Social></Social>
        <Donate></Donate>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
