import React, { useState, useEffect } from "react";
import { IWolf, WolfId } from "./Questions";
import getWolvesInAnswers, { WolfTimes } from "./WolfCounter";
import "./Tally.css";

type WolfRecordProps = {
  times: number;
  wolf: IWolf;
};

type TallyProps = {
  userAnswers: Set<number>;
  answersWolves: Map<number, IWolf>;
  allWolves: IWolf[];
};

function WolfRecord(props: WolfRecordProps) {
  let wolfs = [];
  for (let i = 0; i < props.times; ++i) {
    wolfs.push(
      <span key={i} role="img" aria-label="wolf-times">
        {props.wolf.face}
      </span>
    );
  }

  return <div>{wolfs}</div>;
}

function Tally(props: TallyProps) {
  const [wolvesInAnwsersList, setWolvesInAnwsersList] = useState<WolfTimes[]>(
    []
  );

  useEffect(() => {
    let wolvesInAnwsers = getWolvesInAnswers(
      props.userAnswers,
      props.answersWolves
    );

    setWolvesInAnwsersList(wolvesInAnwsers);
  }, [props.answersWolves, props.userAnswers]);

  return (
    <div>
      <h4 className="tally">Tally</h4>
      {wolvesInAnwsersList.map((wt: WolfTimes) => {
        let wolfForAnswer = props.allWolves.filter(
          (w) => w.id === wt.wolfId
        )[0];
        return (
          <WolfRecord
            key={wolfForAnswer.id}
            wolf={wolfForAnswer}
            times={wt.times}
          ></WolfRecord>
        );
      })}
    </div>
  );
}

export default Tally;
