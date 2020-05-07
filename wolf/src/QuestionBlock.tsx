import React, { useContext } from "react";
import "./QuestionBlock.css";
import { ThemeContext } from "./ThemeContext";

interface QuestionProps {
  questionNumber: number;
}

function Question(props: QuestionProps) {
  const theme = useContext(ThemeContext);
  return (
    <p style={{ color: theme.textColor }}>Question {props.questionNumber}</p>
  );
}

function QuestionBlock() {
  return (
    <>
      <h4 className="question-block"> Question block</h4>
      <Question questionNumber={1}></Question>
      <Question questionNumber={2}></Question>
      <Question questionNumber={3}></Question>
      <Question questionNumber={4}></Question>
    </>
  );
}

export default QuestionBlock;
