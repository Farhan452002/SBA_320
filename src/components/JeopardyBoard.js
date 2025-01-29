import React, { useState } from "react";

const questions = [
  { id: 1, question: "What is the largest cat breed?", answer: "Maine Coon", points: 100 },
  { id: 2, question: "Which big cat is the fastest?", answer: "Cheetah", points: 200 },
  { id: 3, question: "How many whiskers does a cat have on average?", answer: "24", points: 300 },
];

const JeopardyBoard = () => {
  const [revealed, setRevealed] = useState({});

  return (
    <div className="jeopardy-board">
      <h2>Jeopardy: Cat Edition</h2>
      {questions.map((q) => (
        <div key={q.id} className="question-card">
          {!revealed[q.id] ? (
            <button onClick={() => setRevealed({ ...revealed, [q.id]: true })}>{q.points}</button>
          ) : (
            <div>
              <p>{q.question}</p>
              <button onClick={() => alert(`Answer: ${q.answer}`)}>Show Answer</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JeopardyBoard;
