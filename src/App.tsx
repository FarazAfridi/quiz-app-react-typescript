import React, { useState, useEffect } from 'react';
import './App.css';
import { QuestionState, answerObject } from './types/types';
import { fetchQuizQuestion } from "./API/API";
import QuestionCard from './components/questionCard/QuestionCard';
import { notificationFunc } from "./firebase";

const App: React.FC = () => {

  useEffect(() => {
    notificationFunc();
  }, [])

  // let questionNumber = 10;
  let difficultyLevel = "easy";

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(5);

  console.log(questions);


  const diffcultyPicker = (diff: React.FormEvent<HTMLSelectElement>) => {
    difficultyLevel = diff.currentTarget.value;
    setGameOver(true);
  }

  const QuestionNumberPicker = (num: React.FormEvent<HTMLSelectElement>) => {
    setQuestionNumber(Number(num.currentTarget.value));
    setGameOver(true);
    console.log(questionNumber)
  }

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestion(questionNumber, difficultyLevel)

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev: number) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev: answerObject[]) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === questionNumber) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className={`${gameOver ? "main_container" : null}`}>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === questionNumber ? (
        <div>
          <select style={{ width: '50%', marginTop: '30px', fontSize: '20px' }} onChange={(e: React.FormEvent<HTMLSelectElement>) => diffcultyPicker(e)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <br />
          <select style={{ width: '50%', margin: '20px 0', fontSize: '20px' }} onChange={(e: React.FormEvent<HTMLSelectElement>) => QuestionNumberPicker(e)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <br />
          <button className="btn" onClick={() => { 
             startTrivia();
            }}>Start</button>

        </div>
      ) : null}

      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={questionNumber}
          question={questions[number].question}
          answers={questions[number].answers}
          UserAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          score={score}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 ? (
        <button className='btn' onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}

    </div>
  );
}

export default App;
