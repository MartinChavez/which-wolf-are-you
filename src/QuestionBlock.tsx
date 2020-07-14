import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer, AnswerId } from "./Questions";

type AnswerProps = {
  answerId: AnswerId;
  answer: string;
  onAnswerSelected: (answerId: AnswerId) => void;
  isSelected: boolean;
};

export type QuestionBlockProps = {
  question: IQuestion;
  answers: IAnswer[];
  selectedAnswerId?: number;
  onAnswerSelected: (answerId: AnswerId) => void;
};

function Answer(props: AnswerProps) {
  const theme = useContext(ThemeContext);
  const textDecoration = props.isSelected ? "underline" : "";

  const onButtonClick = () => {
    props.onAnswerSelected(props.answerId);
  };

  return (
    <span
      className="answer"
      onClick={onButtonClick}
      style={{
        color: theme.textColor,
        display: "block",
        textDecoration,
      }}
    >
      {props.answer}
    </span>
  );
}

function QuestionBlock(props: QuestionBlockProps) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h4
        className="section-sub-title"
        style={{
          color: theme.secondaryTextColor,
        }}
      >
        {props.question.question}
      </h4>
      {props.answers.map((ans) => (
        <Answer
          key={ans.id}
          answer={ans.answer}
          answerId={ans.id}
          onAnswerSelected={props.onAnswerSelected}
          isSelected={ans.id === props.selectedAnswerId}
        ></Answer>
      ))}
    </>
  );
}

export default QuestionBlock;
