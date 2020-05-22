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
  const questionsAnswers = useMemo(() => getSessionQuestionsAnswers(), []);
  const answersWolves = useMemo(() => getAnswersWolves(), []);
  const allWolves = useMemo(() => GetAllWolves(), []);
  const [userAnswers, setUserAnswers] = useState(new Set<AnswerId>());
  const [wolfResult, setWolfResult] = useState(allWolves[0]);
  const [showWolfResult, setShowWolfResult] = useState(false);

  return {
    questionsAnswers,
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
    questionsAnswers,
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
    let quizFinished = questionsAnswers.size === userAnswers.size;
    if (quizFinished) {
      setWolfResult(getMaxWolfResult(userAnswers, answersWolves, allWolves));
      setShowWolfResult(true);
    }
  }, [
    allWolves,
    answersWolves,
    questionsAnswers.size,
    setShowWolfResult,
    setWolfResult,
    userAnswers,
    userAnswers.size,
  ]);

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
        {showWolfResult && <WolfResult wolf={wolfResult}></WolfResult>}
        <Social></Social>
        <Donate></Donate>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
