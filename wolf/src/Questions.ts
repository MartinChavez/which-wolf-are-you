import { getRandomIds } from "./Random";

interface IQuestionAnswer {
  id: number;
}

export interface IQuestion extends IQuestionAnswer {
  question: string;
}

export interface IAnswer extends IQuestionAnswer {
  answer: string;
}

export interface IWolf {
  id: number;
  name: string;
}

let questions: IQuestion[] = [
  { id: 1, question: "aaa?" },
  { id: 2, question: "bbb?" },
  // { id: 2, question: "bbb?" },
  // { id: 3, question: "ccc?" },
  // { id: 4, question: "ddd?" },
];

let answers: IAnswer[] = [
  { id: 1, answer: "aaa" },
  { id: 2, answer: "bbb" },
  { id: 3, answer: "ccc" },
  { id: 4, answer: "ddd" },
  { id: 5, answer: "aaa2" },
  { id: 6, answer: "bbb2" },
  { id: 7, answer: "ccc2" },
  { id: 8, answer: "ddd2" },
  { id: 9, answer: "aaa3" },
  { id: 10, answer: "bbb3" },
  { id: 11, answer: "ccc3" },
  { id: 12, answer: "ddd3" },
  { id: 13, answer: "aaa4" },
  { id: 14, answer: "bbb4" },
  { id: 15, answer: "ccc4" },
  { id: 16, answer: "ddd4" },
];

let wolfs: IWolf[] = [
  { id: 1, name: "Mexican wolf" },
  { id: 2, name: "Artic Wolf" },
  { id: 3, name: "Japanese wolf" },
  { id: 4, name: "Iberian Wolf" },
];

export let questionAnswers = new Map<number, IAnswer[]>();
questionAnswers.set(1, [
  answers[0],
  answers[1],
  answers[2],
  answers[3],
  answers[4],
  answers[5],
  answers[6],
  answers[7],
]);
questionAnswers.set(2, [
  answers[8],
  answers[9],
  answers[10],
  answers[11],
  answers[12],
  answers[13],
  answers[14],
  answers[15],
]);

type AnswerId = Pick<IAnswer, "id">;
export let answerWolf = new Map<AnswerId, IWolf>();

answers.forEach((answer) => {
  const answerId: AnswerId = { id: answer.id };
  const randomWolfId = getRandomIds(
    wolfs.map((w) => w.id),
    1
  );

  const getWolfId = (randomWolfId: Set<number>): number => {
    const wolfId = randomWolfId.values().next().value;
    return wolfId;
  };

  const wolf = wolfs.filter((w) => w.id === getWolfId(randomWolfId))[0];
  answerWolf.set(answerId, wolf);
});

export const getSessionQuestionsAnswers = () => {
  let sessionQuestionIds = getRandomIds(
    questions.map((q) => q.id),
    2
  );
  let sessionQuestions = questions.filter((q) => sessionQuestionIds.has(q.id));
  let sessionQuestionsAnswers = new Map<IQuestion, IAnswer[]>();
  sessionQuestions.forEach((sq) => {
    let allQuestionAnswers = questionAnswers.get(sq.id);
    if (allQuestionAnswers) {
      const sessionQuestionAnswers = getRandomIds(
        allQuestionAnswers.map((sqa) => sqa.id),
        4
      );
      sessionQuestionsAnswers.set(
        sq,
        answers.filter((a) => sessionQuestionAnswers.has(a.id))
      );
    }
  });

  return sessionQuestionsAnswers;
};
