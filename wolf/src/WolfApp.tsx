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
  IWolf,
} from "./Questions";
import getWolvesInAnswers, { WolfTimes } from "./WolfCounter";

function getWolfResult(
  userAnswers: Set<AnswerId>,
  answersWolves: Map<AnswerId, IWolf>,
  allWolves: IWolf[]
): IWolf {
  let wolvesInAnwsers = getWolvesInAnswers(userAnswers, answersWolves);

  var maxWolf = wolvesInAnwsers.reduce(function (
    previous: WolfTimes,
    current: WolfTimes
  ) {
    if (current.times >= previous.times) {
      return current;
    }

    return previous;
  });

  return allWolves.filter((w) => w.id === maxWolf.wolfId)[0];
}

function WolfApp() {
  const questionsAnswers = useMemo(() => getSessionQuestionsAnswers(), []);
  const answersWolves = useMemo(() => getAnswersWolves(), []);
  const allWolves = useMemo(() => GetAllWolves(), []);
  const [userAnswers, setUserAnswers] = useState(new Set<AnswerId>());
  const [theme, setTheme] = useState(themes.day);
  const [wolfResult, setWolfResult] = useState(allWolves[0]);
  const [showWolfResult, setShowWolfResult] = useState(false);

  useEffect(() => {
    let quizFinished = questionsAnswers.size === userAnswers.size;
    if (quizFinished) {
      setWolfResult(getWolfResult(userAnswers, answersWolves, allWolves));
      setShowWolfResult(true);
    }
  }, [
    allWolves,
    answersWolves,
    questionsAnswers.size,
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
