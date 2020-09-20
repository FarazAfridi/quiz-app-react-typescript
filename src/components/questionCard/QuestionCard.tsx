import * as React from "react";
import { Props} from "../../types/types";
import "./QuestionCard.css";

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    UserAnswer,
    questionNr,
    totalQuestions,
    score,
}) => (
        <div className="container">
            <p className='score'>Score: {score}</p>
            <p className="number" >Question: {questionNr} / {totalQuestions}</p>
            {/* <p dangerouslySetInnerHTML={{ __html: question}} /> */}
            <p className="question">{question}</p>
            <div className="quiz_answer">{answers.map(answer => (<div key={answer}>
                <button className="answer" disabled={UserAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                </button>
            </div>))}</div>
       </div>
    );

export default QuestionCard;
