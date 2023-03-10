import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
  const {gameOver, correctWord, currAttempt} = useContext(AppContext);
  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? 'You correctly guessed' : 'You failed'} </h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (currAttempt.attempt > 1 ? (<h3>You guessed in {currAttempt.attempt} attempts</h3>) : (<h3>You guessed in {currAttempt.attempt} attempt</h3>))}
    </div>
  );
}

export default GameOver;