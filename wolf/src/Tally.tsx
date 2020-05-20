import React, { useState, useEffect } from "react";
import { AnswerId, IWolf } from "./Questions";
import "./Tally.css";

type WolfRecordProps = {
  times: number;
  wolf: IWolf;
};

type TallyProps = {
  userAnswers: Set<number>;
  answersWolves: Map<AnswerId, IWolf>;
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
type WolfId = Pick<IWolf, "id">;
type WolfTimes = {
  wolfId: WolfId;
  times: number;
};

function Tally(props: TallyProps) {
  debugger;

  const [wolvesInAnwsersList, setWolvesInAnwsersList] = useState<WolfTimes[]>(
    []
  );
  // Array.from(wolvesInAnwsers)

  useEffect(() => {
    let wolvesInAnwsers: Map<WolfId, number> = new Map<WolfId, number>();

    props.userAnswers.forEach((ua) => {
      const wolfForAnswer = props.answersWolves.get({ id: ua });
      const wolfIdForAnswer = { id: wolfForAnswer?.id } as WolfId;

      if (!wolvesInAnwsers.has(wolfIdForAnswer)) {
        wolvesInAnwsers.set(wolfIdForAnswer, 0);
      }

      let prevCount = wolvesInAnwsers.get(wolfIdForAnswer) as number;

      wolvesInAnwsers.set(wolfIdForAnswer, prevCount + 1);
    });

    let list = Array.from(wolvesInAnwsers).map((wia) => {
      return {
        wolfId: wia[0],
        times: wia[1],
      };
    });
    debugger;
    setWolvesInAnwsersList(list);
  }, [props.answersWolves, props.userAnswers]);

  return (
    <div>
      <h4 className="tally">Tally</h4>
      {wolvesInAnwsersList.map((wt: WolfTimes) => {
        let wolfForAnswer = props.allWolves.filter(
          (w) => w.id === wt.wolfId.id
        )[0];
        return <WolfRecord wolf={wolfForAnswer} times={wt.times}></WolfRecord>;
      })}
    </div>
  );
}

export default Tally;
