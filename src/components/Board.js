import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Board = () => {
  const categories = useSelector((state) => state.jeopardy.categories);

  return (
    <div className="board">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Board;
