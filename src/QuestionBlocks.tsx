import React, { Dispatch, useEffect, useState } from "react";
import QuestionBlock from "./QuestionBlock";
import { IQuestion, IAnswer, AnswerId, QuestionId } from "./Questions";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
  userAnswers: Set<AnswerId>;
};

function QuestionBlocks(props: QuestionBlocksProps) {
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

    if (questionToAnswerSelected.get(question.id) !== answerId) {
      props.setUserAnswers((prevUserAnswers) => {
        prevUserAnswers.delete(questionToAnswerSelected.get(question.id)!);
        return new Set<AnswerId>(prevUserAnswers);
      });
    }

    props.setUserAnswers((prevUserAnswers) => {
      prevUserAnswers.add(answerId);
      return new Set<AnswerId>(prevUserAnswers);
    });

    questionToAnswerSelected.set(question.id, answerId);
  };

  return (
    <>
      <div>
        <h4>Questions</h4>
        {showBackButton && <button onClick={onBackButtonClick}> Back </button>}
        <QuestionBlock
          question={question}
          answers={answers}
          onAnswerSelected={onAnswerSelected}
          selectedAnswerId={questionToAnswerSelected.get(question.id)}
        ></QuestionBlock>
      </div>
    </>
  );
}

export default QuestionBlocks;
