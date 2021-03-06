import React, { Dispatch, useEffect, useState, useContext } from "react";
import QuestionBlock from "./QuestionBlock";
import { ThemeContext } from "./ThemeContext";
import { IQuestion, IAnswer, AnswerId, QuestionId } from "./Questions";
import wolfPaw from "./WolfPaw.svg";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
  userAnswers: Set<AnswerId>;
};

type WolfPawBackButtonProps = {
  onClick: () => void;
};

function WolfPawBackButton(props: WolfPawBackButtonProps) {
  return (
    <img
      onClick={props.onClick}
      src={wolfPaw}
      alt="Back"
      height="80px"
      width="auto"
      style={{ cursor: "pointer" }}
    />
  );
}

function QuestionBlocks(props: QuestionBlocksProps) {
  const theme = useContext(ThemeContext);
  const [questionBlocks, setQuestionBlocks] = useState(
    Array.from(props.questionsAnswers)
  );
  const [questionToAnswerSelected, setQuestionToAnswerSelected] = useState(
    new Map<QuestionId, AnswerId>()
  );
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const question = questionBlocks[displayedIndex][0];
  const answers = questionBlocks[displayedIndex][1];

  useEffect(() => {
    setQuestionBlocks(Array.from(props.questionsAnswers));
    setDisplayedIndex(0);
    setQuestionToAnswerSelected(new Map<QuestionId, AnswerId>());
  }, [props.questionsAnswers]);

  useEffect(() => {
    if (displayedIndex > 0) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [displayedIndex]);

  const onBackButtonClick = () => {
    if (displayedIndex > 0) {
      setDisplayedIndex(displayedIndex - 1);
    }
  };

  const onAnswerSelected = (answerId: AnswerId) => {
    if (displayedIndex < questionBlocks.length - 1) {
      setDisplayedIndex(displayedIndex + 1);
    }

    let prevAnswerId = questionToAnswerSelected.get(question.id);
    props.setUserAnswers((prevUserAnswers) => {
      if (prevAnswerId) {
        prevUserAnswers.delete(prevAnswerId);
      }
      prevUserAnswers.add(answerId);
      return new Set<AnswerId>(prevUserAnswers);
    });

    questionToAnswerSelected.set(question.id, answerId);
  };

  return (
    <>
      <div className="question">
        <h4
          className="section-title"
          style={{
            color: theme.textColor,
          }}
        >
          Questions
        </h4>
        <QuestionBlock
          question={question}
          answers={answers}
          onAnswerSelected={onAnswerSelected}
          selectedAnswerId={questionToAnswerSelected.get(question.id)}
        ></QuestionBlock>
        {showBackButton && (
          <WolfPawBackButton onClick={onBackButtonClick}></WolfPawBackButton>
        )}
      </div>
    </>
  );
}

export default QuestionBlocks;
