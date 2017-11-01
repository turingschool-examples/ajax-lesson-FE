import React from 'react';

const Trivia = ({ factoid }) => {
  return (
    <li>
      <div>
        Question: {factoid.question}
      </div>
      <div>
        Answer: {factoid.correct_answer}
      </div>
    </li>
  )
}

export default Trivia;
