import { getRandomIds } from "./Random";

export type QuestionId = number;
export type AnswerId = number;
export type WolfId = number;

export interface IQuestion {
  id: QuestionId;
  question: string;
}

export interface IAnswer {
  id: AnswerId;
  answer: string;
}

export interface IWolf {
  id: WolfId;
  name: string;
  face: string;
}

let questions: IQuestion[] = [
  { id: 1, question: "What is your favorite food?" },
  { id: 2, question: "What is your favorite sport?" },
  { id: 3, question: "What is your favorite hobby?" },
  { id: 4, question: "How would you describe yourself?" },
  { id: 5, question: "Which activity would you enjoy most?" },
  { id: 6, question: "What is your dream job?" },
];

let answers: IAnswer[] = [
  { id: 1, answer: "Tacos" },
  { id: 2, answer: "Cheese Puffs and Popcorn" },
  { id: 3, answer: "Red Velvet Cake" },
  { id: 4, answer: "Pizza" },
  { id: 5, answer: "Tapas" },
  { id: 6, answer: "Snowcones" },
  { id: 7, answer: "Sushi" },

  { id: 8, answer: "Soccer" },
  { id: 9, answer: "Sleeping" },
  { id: 10, answer: "Fire dancing" },
  { id: 11, answer: "Motor racing" },
  { id: 12, answer: "Tennis" },
  { id: 13, answer: "Ice hockey " },
  { id: 14, answer: "Karate" },

  { id: 15, answer: "Baking and sharing with others" },
  { id: 16, answer: "Watching cartoons" },
  { id: 17, answer: "Visiting Art Museums" },
  { id: 18, answer: "Hiking" },
  { id: 19, answer: "Doing puzzles" },
  { id: 20, answer: "Snowmobiling " },
  { id: 21, answer: "Collecting" },

  { id: 22, answer: "Helpful" },
  { id: 23, answer: "Lazy" },
  { id: 24, answer: "Expressive" },
  { id: 25, answer: "Self-Confident " },
  { id: 26, answer: "Curious" },
  { id: 27, answer: "Practical" },
  { id: 28, answer: "Organized" },

  { id: 29, answer: "Cheering at a soccer match" },
  { id: 30, answer: "Watching a movie" },
  { id: 31, answer: "Visiting the art museum" },
  { id: 32, answer: "Shopping at the mall" },
  { id: 33, answer: "Stargazing at the planetarium" },
  { id: 34, answer: "Working out at the gym" },
  { id: 35, answer: "Arranging flowers" },

  { id: 36, answer: "Teacher" },
  { id: 37, answer: "Job?! No thanks!" },
  { id: 38, answer: "Artist" },
  { id: 39, answer: "Celebrity" },
  { id: 40, answer: "Astronaut" },
  { id: 41, answer: "Veterinarian" },
  { id: 42, answer: "Accountant" },
];

let wolves: IWolf[] = [
  { id: 1, name: "Mexican wolf", face: "🐺" },
  { id: 2, name: "Plush wolf", face: "🦊" },
  { id: 3, name: "Red wolf", face: "🐱" },
  { id: 4, name: "Italian Wolf", face: "🐻" },
  { id: 5, name: "Iberian wolf", face: "🦊" },
  { id: 6, name: "Arctic wolf", face: "🐱" },
  { id: 7, name: "Japanese Wolf", face: "🐻" },
];

export let questionAnswers = new Map<QuestionId, IAnswer[]>();
questionAnswers.set(1, [
  answers[0],
  answers[1],
  answers[2],
  answers[3],
  answers[4],
  answers[5],
  answers[6],
]);
questionAnswers.set(2, [
  answers[7],
  answers[8],
  answers[9],
  answers[10],
  answers[11],
  answers[12],
  answers[13],
]);

questionAnswers.set(3, [
  answers[14],
  answers[15],
  answers[16],
  answers[17],
  answers[18],
  answers[19],
  answers[20],
]);

questionAnswers.set(4, [
  answers[21],
  answers[22],
  answers[23],
  answers[24],
  answers[25],
  answers[26],
  answers[27],
]);

questionAnswers.set(5, [
  answers[28],
  answers[29],
  answers[30],
  answers[31],
  answers[32],
  answers[33],
  answers[34],
]);

questionAnswers.set(6, [
  answers[35],
  answers[36],
  answers[37],
  answers[38],
  answers[39],
  answers[40],
  answers[41],
]);

let answersWolves = new Map<AnswerId, IWolf>();
answersWolves.set(1, wolves[0]);
answersWolves.set(8, wolves[0]);
answersWolves.set(15, wolves[0]);
answersWolves.set(22, wolves[0]);
answersWolves.set(29, wolves[0]);
answersWolves.set(36, wolves[0]);

answersWolves.set(2, wolves[1]);
answersWolves.set(9, wolves[1]);
answersWolves.set(16, wolves[1]);
answersWolves.set(23, wolves[1]);
answersWolves.set(30, wolves[1]);
answersWolves.set(37, wolves[1]);

answersWolves.set(3, wolves[2]);
answersWolves.set(10, wolves[2]);
answersWolves.set(17, wolves[2]);
answersWolves.set(24, wolves[2]);
answersWolves.set(31, wolves[2]);
answersWolves.set(38, wolves[2]);

answersWolves.set(4, wolves[3]);
answersWolves.set(11, wolves[3]);
answersWolves.set(18, wolves[3]);
answersWolves.set(25, wolves[3]);
answersWolves.set(32, wolves[3]);
answersWolves.set(39, wolves[3]);

answersWolves.set(5, wolves[4]);
answersWolves.set(12, wolves[4]);
answersWolves.set(19, wolves[4]);
answersWolves.set(26, wolves[4]);
answersWolves.set(33, wolves[4]);
answersWolves.set(40, wolves[4]);

answersWolves.set(6, wolves[5]);
answersWolves.set(13, wolves[5]);
answersWolves.set(20, wolves[5]);
answersWolves.set(27, wolves[5]);
answersWolves.set(34, wolves[5]);
answersWolves.set(41, wolves[5]);

answersWolves.set(7, wolves[6]);
answersWolves.set(14, wolves[6]);
answersWolves.set(21, wolves[6]);
answersWolves.set(28, wolves[6]);
answersWolves.set(35, wolves[6]);
answersWolves.set(42, wolves[6]);

export let GetAllWolves = () => {
  return wolves;
};

export let getAnswersWolves = () => {
  return answersWolves;
};

export const getSessionQuestionsAnswers = () => {
  let sessionQuestionsAnswers = new Map<IQuestion, IAnswer[]>();
  questions.forEach((sq) => {
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
