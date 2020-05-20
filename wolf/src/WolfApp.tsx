import React, { useState, useMemo } from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import Social from "./Social";
import Donate from "./Donate";
import Header from "./Header";
import { ThemeContext, themes } from "./ThemeContext";
import {
  getSessionQuestionsAnswers,
  getAnswersWolves,
  GetAllWolves,
  AnswerId,
} from "./Questions";

function WolfApp() {
  const questionsAnswers = useMemo(() => getSessionQuestionsAnswers(), []);
  const answersWolves = useMemo(() => getAnswersWolves(), []);
  const allWolves = useMemo(() => GetAllWolves(), []);
  const [userAnswers, setUserAnswers] = useState(new Set<AnswerId>());

  const [theme, setTheme] = useState(themes.day);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="grid" style={{ background: theme.background }}>
        <Header setTheme={setTheme}></Header>
        <QuestionBlocks
          questionsAnswers={questionsAnswers}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        ></QuestionBlocks>
        <Tally
          userAnswers={userAnswers}
          answersWolves={answersWolves}
          allWolves={allWolves}
        ></Tally>
        <WolfResult></WolfResult>
        <Social></Social>
        <Donate></Donate>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
