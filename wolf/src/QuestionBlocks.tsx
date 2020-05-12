import React from "react";
import QuestionBlock from "./QuestionBlock";
import { IQuestion, IAnswer } from "./Questions";

export type QuestionBlocksProps = {
  questionsAnswers: Map<IQuestion, IAnswer[]>;
};

function QuestionBlocks(props: QuestionBlocksProps) {
  let questionBlocks = Array.from(props.questionsAnswers);
  return (
    <>
      {questionBlocks.map((qb) => {
        return (
          <div>
            <QuestionBlock question={qb[0]} answers={qb[1]}></QuestionBlock>
          </div>
        );
      })}
    </>
  );
}

export default QuestionBlocks;
