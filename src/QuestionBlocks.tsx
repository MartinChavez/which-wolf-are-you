import React, { Dispatch, useEffect, useState } from "react";
import QuestionBlock from "./QuestionBlock";
import { IQuestion, IAnswer, AnswerId } from "./Questions";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
  userAnswers: Set<AnswerId>;
};

type QuestionBlockOnDisplayProps = {
  question: IQuestion;
  answers: IAnswer[];
  userAnswers: Set<AnswerId>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
  displayedIndex: number;
  setDisplayedIndex: Dispatch<React.SetStateAction<number>>;
  questionBlocks: [IQuestion, IAnswer[]][];
};

function QuestionBlockOnDisplay(props: QuestionBlockOnDisplayProps) {
  const onAnswerSelected = () => {
    if (props.displayedIndex < props.questionBlocks.length - 1) {
      props.setDisplayedIndex(props.displayedIndex + 1);
    }
  };

  return (
    <QuestionBlock
      question={props.question}
      answers={props.answers}
      userAnswers={props.userAnswers}
      setUserAnswers={props.setUserAnswers}
      onAnswerSelected={onAnswerSelected}
    ></QuestionBlock>
  );
}

function QuestionBlocks(props: QuestionBlocksProps) {
  const [questionBlocks, setQuestionBlocks] = useState(
    Array.from(props.questionsAnswers)
  );

  const [displayedIndex, setDisplayedIndex] = useState(0);

  useEffect(() => {
    setQuestionBlocks(Array.from(props.questionsAnswers));
    setDisplayedIndex(0);
  }, [props.questionsAnswers]);

  const onBackButtonClick = () => {
    if (displayedIndex > 0) {
      setDisplayedIndex(displayedIndex - 1);
    }
  };

  return (
    <>
      <div>
        <h4>Questions</h4>
        <button onClick={onBackButtonClick}> Back </button>
        <QuestionBlockOnDisplay
          question={questionBlocks[displayedIndex][0]}
          answers={questionBlocks[displayedIndex][1]}
          userAnswers={props.userAnswers}
          setUserAnswers={props.setUserAnswers}
          displayedIndex={displayedIndex}
          setDisplayedIndex={setDisplayedIndex}
          questionBlocks={questionBlocks}
        ></QuestionBlockOnDisplay>
      </div>
    </>
  );
}

export default QuestionBlocks;
