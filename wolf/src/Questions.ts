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

export let answerWolf = new Map<IAnswer, IWolf>();
answerWolf.set(answers[0], wolfs[0]);
answerWolf.set(answers[1], wolfs[1]);

export const getSessionQuestionsAnswers = () => {
  let sessionQuestionIds = getRandomIds(
    questions.map((q) => q.id),
    1
  );
  let sessionQuestions = questions.filter((q) => sessionQuestionIds.has(q.id));
  let sessionQuestionsAnswers = new Map<IQuestion, IAnswer[]>();

  sessionQuestions.forEach((sq) => {
    let allSessionQuestionAnswers = questionAnswers.get(sq.id);
    if (allSessionQuestionAnswers) {
      const sessionQuestionAnswers = getRandomIds(
        allSessionQuestionAnswers.map((sqa) => sqa.id),
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
