import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { answerCorrect, answerIncorrect } from '../features/jeopardySlice';

const Question = ({ question }) => {
  const [revealed, setRevealed] = useState(false);
  const dispatch = useDispatch();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch(answerCorrect(question.points));
    } else {
      dispatch(answerIncorrect(question.points));
    }
    setRevealed(true);
  };

  return (
    <div className="question">
      {!revealed ? (
        <button onClick={() => setRevealed(true)}>{question.points}</button>
      ) : (
        <div>
          <p>{question.question}</p>
          <button onClick={() => handleAnswer(true)}>Correct</button>
          <button onClick={() => handleAnswer(false)}>Incorrect</button>
        </div>
      )}
    </div>
  );
};

export default Question;
