export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// export enum Difficulty {
//     EASY = "easy",
//     MEDIUM = "medium",
//     HARD = "hard",
// }

export type QuestionState = Question & {answers: string[]}

export type answerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }

export type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    UserAnswer: answerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    score: number
};