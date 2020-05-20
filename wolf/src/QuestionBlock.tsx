import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  Dispatch,
} from "react";
import "./QuestionBlock.css";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer } from "./Questions";

type AnswerProps = {
  answerId: number;
  answer: string;
  state: QuestionBlockState;
  dispatch: React.Dispatch<QuestionBlockAction>;
  userAnswers: Set<number>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<number>>>;
};

export type QuestionBlockProps = {
  question: IQuestion;
  answers: IAnswer[];
  userAnswers: Set<number>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<number>>>;
};

function Answer(props: AnswerProps) {
  const theme = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const buttonClick = () => {
    props.dispatch({ type: "questionSelected", answerId: props.answerId });
  };

  const answerSelected =
    props.state.questionSelectedForBlock === props.answerId;

  const handleBackgroundColor = () => {
    if (answerSelected) {
      setBackgroundColor("grey");
    } else {
      setBackgroundColor("white");
    }
  };

  const handleUserAnswers = () => {
    if (answerSelected) {
      props.setUserAnswers((prevUserAnswers) => {
        prevUserAnswers.add(props.answerId);
        return new Set<number>(prevUserAnswers);
      });
    } else {
      props.setUserAnswers((prevUserAnswers) => {
        prevUserAnswers.delete(props.answerId);
        return new Set<number>(prevUserAnswers);
      });
    }
  };

  useEffect(handleBackgroundColor, [
    props.answerId,
    props.state.questionSelectedForBlock,
  ]);

  useEffect(handleUserAnswers, [
    props.answerId,
    props.state.questionSelectedForBlock,
  ]);

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
          userAnswers={props.userAnswers}
          setUserAnswers={props.setUserAnswers}
        ></Answer>
      ))}
    </>
  );
}

export default QuestionBlock;
