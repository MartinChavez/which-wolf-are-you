import React, { Dispatch } from "react";
import QuestionBlock from "./QuestionBlock";
import { IQuestion, IAnswer } from "./Questions";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
  setUserAnswers: Dispatch<React.SetStateAction<Set<number>>>;
  userAnswers: Set<number>;
};

function QuestionBlocks(props: QuestionBlocksProps) {
  let questionBlocks = Array.from(props.questionsAnswers);
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
