import React from 'react';
import Question from './Question';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      {category.questions.map((q, index) => (
        <Question key={index} question={q} />
      ))}
    </div>
  );
};

export default Category;
