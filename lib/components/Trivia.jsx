import React from 'react';

const Trivia = ({ factoid }) => {
  return (
    <li>
      <h2>
        Question: {factoid.question}
      </h2>
      <h3>
        Answer: {factoid.correct_answer}
      </h3>
    </li>
  )
}

export default Trivia;
