import React, { Dispatch, useEffect, useState } from "react";
import QuestionBlock from "./QuestionBlock";
import { IQuestion, IAnswer, AnswerId } from "./Questions";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<AnswerId>>>;
  userAnswers: Set<AnswerId>;
};

function QuestionBlocks(props: QuestionBlocksProps) {
  const [questionBlocks, setQuestionBlocks] = useState(
    Array.from(props.questionsAnswers)
  );

  useEffect(() => {
    setQuestionBlocks(Array.from(props.questionsAnswers));
  }, [props.questionsAnswers]);

  //let questionBlocks = Array.from(props.questionsAnswers);
  return (
    <>
      {questionBlocks.map((qb) => {
        return (
          <div key={qb[0].id}>
            <QuestionBlock
              question={qb[0]}
              answers={qb[1]}
              userAnswers={props.userAnswers}
              setUserAnswers={props.setUserAnswers}
            ></QuestionBlock>
          </div>
        );
      })}
    </>
  );
}

export default QuestionBlocks;
