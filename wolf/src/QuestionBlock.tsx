import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  Dispatch,
} from "react";
import "./QuestionBlock.css";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer, AnswerId } from "./Questions";

type AnswerProps = {
  answerId: AnswerId;
  answer: string;
  state: QuestionBlockState;
  dispatch: React.Dispatch<QuestionBlockAction>;
  userAnswers: Set<AnswerId>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
};

export type QuestionBlockProps = {
  question: IQuestion;
  answers: IAnswer[];
  userAnswers: Set<AnswerId>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
};

function Answer(props: AnswerProps) {
  const theme = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const buttonClick = () => {
    props.dispatch({ type: "questionSelected", answerId: props.answerId });
  };

  const answerSelected = props.state.answerSelectedForBlock === props.answerId;

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
        return new Set<AnswerId>(prevUserAnswers);
      });
    } else {
      props.setUserAnswers((prevUserAnswers) => {
        prevUserAnswers.delete(props.answerId);
        return new Set<AnswerId>(prevUserAnswers);
      });
    }
  };

  useEffect(handleBackgroundColor, [
    props.answerId,
    props.state.answerSelectedForBlock,
  ]);

  useEffect(handleUserAnswers, [
    props.answerId,
    props.state.answerSelectedForBlock,
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
  answerSelectedForBlock: number;
};

type QuestionBlockAction = {
  type: string;
  answerId: AnswerId;
};

function init(answerSelected: number) {
  return { answerSelectedForBlock: answerSelected };
}

function reducer(state: QuestionBlockState, action: QuestionBlockAction) {
  switch (action.type) {
    case "questionSelected":
      return { answerSelectedForBlock: action.answerId };
    case "reset":
      return init(action.answerId);
    default:
      throw new Error();
  }
}

function QuestionBlock(props: QuestionBlockProps) {
  let noAnswerSelected: number = 0;
  const [state, dispatch] = useReducer(reducer, noAnswerSelected, init);

  useEffect(() => {
    dispatch({ type: "reset", answerId: noAnswerSelected });
  }, [props.question, props.answers, noAnswerSelected]);

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
