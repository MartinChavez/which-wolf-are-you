import React, { useContext } from "react";
import "./QuestionBlock.css";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer } from "./Questions";

type AnswerProps = {
  answer: string;
};

export type QuestionBlockProps = {
  question: IQuestion;
  answers: IAnswer[];
};

function Answer(props: AnswerProps) {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme.textColor }}>Answer {props.answer}</p>;
}

function QuestionBlock(props: QuestionBlockProps) {
  return (
    <>
      <h4 className="question-block"> {props.question.question}</h4>
      {props.answers.map((ans) => (
        <Answer key={ans.id} answer={ans.answer}></Answer>
      ))}
    </>
  );
}

export default QuestionBlock;
