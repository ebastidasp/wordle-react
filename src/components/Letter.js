import React, {useContext, useEffect} from 'react';
import {AppContext} from '../App';

function Letter({letterPos, attemptVal}) {
  const {board, correctWord, currAttempt, setDisabledLetters} = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord[letterPos] === letter;
  let numberOfTimesLeftLetterInCorrectWord = correctWord.split(letter).length-1;
  for (let i = 0; i < 5; i++) {
    if (i !== letterPos) {
      if(board[attemptVal][i] === correctWord[i] && board[attemptVal][i] === board[attemptVal][letterPos]) {
        numberOfTimesLeftLetterInCorrectWord--;
      }
    }
  }
  for (let i = 0; i < letterPos; i++) {
    if(board[attemptVal][i] === board[attemptVal][letterPos] && board[attemptVal][i] !== correctWord[i]) {
      numberOfTimesLeftLetterInCorrectWord--;
    }
  }
  const almost = !correct && letter !== '' && numberOfTimesLeftLetterInCorrectWord > 0;

  const letterState = currAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error');
  
  useEffect(() => {
    if(letter !== '' && !correctWord.includes(letter)){
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className='letter' id={letterState}>{letter}</div>
  );
}

export default Letter;