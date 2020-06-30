import React, { useState, useMemo, useEffect } from "react";
import "./WolfApp.css";
import QuestionBlocks from "./QuestionBlocks";
import Tally from "./Tally";
import WolfResult from "./WolfResult";
import SunMoon from "./SunMoon";
import Reset from "./Reset";
import { ThemeContext, themes } from "./ThemeContext";
import {
  getSessionQuestionsAnswers,
  getAnswersWolves,
  GetAllWolves,
  AnswerId,
} from "./Questions";
import { getMaxWolfResult } from "./WolfCounter";
import Grass from "./Grass";

function useWolfApp() {
  const answersWolves = useMemo(() => getAnswersWolves(), []);
  const allWolves = useMemo(() => GetAllWolves(), []);
  const [sessionQuestionsAnswers, setSessionQuestionsAnswers] = useState(
    getSessionQuestionsAnswers()
  );
  const [userAnswers, setUserAnswers] = useState(new Set<AnswerId>());
  const [wolfResult, setWolfResult] = useState(allWolves[0]);
  const [showWolfResult, setShowWolfResult] = useState(false);
  const [showTally, setShowTally] = useState(false);

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
    showTally,
    setShowTally,
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
    showTally,
    setShowTally,
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

  useEffect(() => {
    if (userAnswers.size > 0) {
      setShowTally(true);
    }
  }, [setShowTally, userAnswers]);

  const resetButtonClick = () => {
    setSessionQuestionsAnswers(getSessionQuestionsAnswers());
    setUserAnswers(new Set<AnswerId>());
    setShowWolfResult(false);
    setWolfResult(allWolves[0]);
    setShowTally(false);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="wolf-app" style={{ background: theme.background }}>
        <SunMoon setTheme={setTheme}></SunMoon>
        <Reset resetButtonClick={resetButtonClick}></Reset>
        <QuestionBlocks
          questionsAnswers={sessionQuestionsAnswers}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        ></QuestionBlocks>
        {showTally && (
          <Tally
            userAnswers={userAnswers}
            answersWolves={answersWolves}
            allWolves={allWolves}
          ></Tally>
        )}
        {showWolfResult && <WolfResult wolf={wolfResult}></WolfResult>}
        <Grass className="left-grass"></Grass>
        <Grass className="center-grass"></Grass>
        <Grass className="right-grass"></Grass>
      </div>
    </ThemeContext.Provider>
  );
}

export default WolfApp;
