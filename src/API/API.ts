import {shuffleArray} from "../utils/Utils";
import { Question } from "../types/types";

export const fetchQuizQuestion = async (amount: number, difficulty: string) => {
    const endpoint = `https://opentdb.com/api.php/?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await( await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),

    }))
}