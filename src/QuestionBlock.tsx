import React, { useContext } from "react";
import "./QuestionBlock.css";
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
  const backgroundColor = props.isSelected ? "grey" : "white";

  const onButtonClick = () => {
    props.onAnswerSelected(props.answerId);
  };

  return (
    <button
      onClick={onButtonClick}
      style={{
        color: theme.textColor,
        backgroundColor: backgroundColor,
        display: "block",
      }}
    >
      {props.answer}
    </button>
  );
}

function QuestionBlock(props: QuestionBlockProps) {
  return (
    <>
      <h4 className="question-block"> {props.question.question}</h4>
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
