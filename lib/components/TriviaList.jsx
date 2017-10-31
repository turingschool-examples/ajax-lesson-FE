import React from 'react';
import Trivia from './Trivia';

const TriviaList = ({ trivia }) => {
  if(!trivia.length) {
    return (
      <p>Click to add some trivia!</p>
    )
  }

  return (
    <div>
      <ul>
        {/* need some trivia here! */}
      </ul>
    </div>
  )
}

export default TriviaList;
