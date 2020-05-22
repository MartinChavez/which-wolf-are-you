import { WolfId, AnswerId, IWolf } from "./Questions";

export type WolfTimes = {
  wolfId: WolfId;
  times: number;
};

const getWolvesInAnswers = (
  userAnswers: Set<AnswerId>,
  answersWolves: Map<AnswerId, IWolf>
): WolfTimes[] => {
  let wolvesInAnwsers: Map<WolfId, number> = new Map<WolfId, number>();

  userAnswers.forEach((userAnswerId) => {
    const wolfForAnswer = answersWolves.get(userAnswerId);
    const wolfIdForAnswer = wolfForAnswer?.id as WolfId;

    if (!wolvesInAnwsers.has(wolfIdForAnswer)) {
      wolvesInAnwsers.set(wolfIdForAnswer, 0);
    }

    let prevCount = wolvesInAnwsers.get(wolfIdForAnswer) as number;

    wolvesInAnwsers.set(wolfIdForAnswer, prevCount + 1);
  });

  let wolvesInAnwsersList: WolfTimes[] = Array.from(wolvesInAnwsers).map(
    (wia) => {
      return {
        wolfId: wia[0],
        times: wia[1],
      };
    }
  );

  return wolvesInAnwsersList;
};

export default getWolvesInAnswers;
