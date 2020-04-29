import React from "react";
import "./QuestionBlock.css";

interface QuestionProps {
  questionNumber: number;
}

function Question(props: QuestionProps) {
  return <p>Question {props.questionNumber}</p>;
}

function QuestionBlock() {
  return (
    <>
      <h4 className="question-block"> Question block</h4>
      <Question questionNumber={1}></Question>
      <Question questionNumber={2}></Question>
    </>
  );
}

export default QuestionBlock;
