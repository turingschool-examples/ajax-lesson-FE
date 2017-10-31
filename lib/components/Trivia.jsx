import React from 'react';

const Trivia = ({ trivia }) => {
  return (
    <li>
      <div>
        Question: {trivia.question}
      </div>
      <div>
        Answer: {trivia.correct_answer}
      </div>
    </li>
  )
}

export default Trivia;
