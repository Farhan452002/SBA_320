import React from 'react';
import Board from './components/Board';
import { useSelector } from 'react-redux';

const App = () => {
  const score = useSelector((state) => state.jeopardy.score);

  return (
    <div className="app">
      <h1>Cat Jeopardy</h1>
      <h2>Score: {score}</h2>
      <Board />
    </div>
  );
};

export default App;
