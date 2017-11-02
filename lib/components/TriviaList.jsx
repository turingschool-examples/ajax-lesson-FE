import React from 'react';
import Trivia from './Trivia';

const TriviaList = ({ triviaArray }) => {
  if(!triviaArray.length) {
    return (
      <p>Click to add some trivia!</p>
    )
  }

  return (
    <div>
      <ul>
        {
          // triviaArray.map((factoid) => {
          //   return (
          //     <li>
          //       <h2>{factoid.question}</h2>
          //       <h3>{factoid.correct_answer}</h3>
          //     </li>
          //   )
          // })
          triviaArray.map((triviaObj) => {
            return <Trivia factoid={triviaObj} />
          })
        }
      </ul>
    </div>
  )
}

export default TriviaList;
