import React, { useContext, useState, useEffect, useReducer } from "react";
import "./QuestionBlock.css";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer } from "./Questions";

type AnswerProps = {
  answerId: number;
  answer: string;
  state: QuestionBlockState;
  dispatch: React.Dispatch<QuestionBlockAction>;
};

export type QuestionBlockProps = {
  question: IQuestion;
  answers: IAnswer[];
};

function Answer(props: AnswerProps) {
  const theme = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const buttonClick = () => {
    props.dispatch({ type: "questionSelected", answerId: props.answerId });
  };

  useEffect(() => {
    if (props.state.questionSelectedForBlock === props.answerId) {
      setBackgroundColor("grey");
    } else {
      setBackgroundColor("white");
    }
  }, [props.answerId, props.state.questionSelectedForBlock]);

  return (
    <button
      onClick={buttonClick}
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

type QuestionBlockState = {
  questionSelectedForBlock: number;
};

type QuestionBlockAction = {
  type: string;
  answerId: number;
};

const initialState: QuestionBlockState = {
  questionSelectedForBlock: 0,
};

function reducer(state: QuestionBlockState, action: QuestionBlockAction) {
  switch (action.type) {
    case "questionSelected":
      return { questionSelectedForBlock: action.answerId };
    default:
      throw new Error();
  }
}

function QuestionBlock(props: QuestionBlockProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [questionSelectedForBlock, setQuestionSelectedForBlock] = useState(0);

  return (
    <>
      <h4 className="question-block"> {props.question.question}</h4>
      {props.answers.map((ans) => (
        <Answer
          key={ans.id}
          answer={ans.answer}
          answerId={ans.id}
          state={state}
          dispatch={dispatch}
        ></Answer>
      ))}
    </>
  );
}

export default QuestionBlock;
