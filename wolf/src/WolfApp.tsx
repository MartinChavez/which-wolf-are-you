import React, { useState, useMemo, useEffect } from "react";
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
import { getMaxWolfResult } from "./WolfCounter";

function useWolfApp() {
  const answersWolves = useMemo(() => getAnswersWolves(), []);
  const allWolves = useMemo(() => GetAllWolves(), []);
  const [sessionQuestionsAnswers, setSessionQuestionsAnswers] = useState(
    getSessionQuestionsAnswers()
  );
  const [userAnswers, setUserAnswers] = useState(new Set<AnswerId>());
  const [wolfResult, setWolfResult] = useState(allWolves[0]);
  const [showWolfResult, setShowWolfResult] = useState(false);

  return {
    sessionQuestionsAnswers,
    setSessionQuestionsAnswers,
    answersWolves,
    allWolves,
    userAnswers,
    setUserAnswers,
    wolfResult,
    setWolfResult,
    showWolfResult,
    setShowWolfResult,
  };
}

function WolfApp() {
  const {
    sessionQuestionsAnswers,
    setSessionQuestionsAnswers,
    answersWolves,
    allWolves,
    userAnswers,
    setUserAnswers,
    wolfResult,
    setWolfResult,
    showWolfResult,
    setShowWolfResult,
  } = useWolfApp();

  const [theme, setTheme] = useState(themes.day);

  useEffect(() => {
    let quizFinished = sessionQuestionsAnswers.size === userAnswers.size;
    if (quizFinished) {
      setWolfResult(getMaxWolfResult(userAnswers, answersWolves, allWolves));
      setShowWolfResult(true);
    }
  }, [
    allWolves,
    answersWolves,
    sessionQuestionsAnswers.size,
    setShowWolfResult,
    setWolfResult,
    userAnswers,
    userAnswers.size,
  ]);

  const resetButtonClick = () => {
    setSessionQuestionsAnswers(getSessionQuestionsAnswers());
    setUserAnswers(new Set<AnswerId>());
    setShowWolfResult(false);
    setWolfResult(allWolves[0]);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="grid" style={{ background: theme.background }}>
        <button onClick={resetButtonClick}>Reset</button>
        <Header setTheme={setTheme}></Header>
        <QuestionBlocks
          questionsAnswers={sessionQuestionsAnswers}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        ></QuestionBlocks>
        <Tally
          userAnswers={userAnswers}
          answersWolves={answersWolves}
          allWolves={allWolves}
        ></Tally>
        {showWolfResult && <WolfResult wolf={wolfResult}></WolfResult>}
        <Social></Social>
        <Donate></Donate>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
