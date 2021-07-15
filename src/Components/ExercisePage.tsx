import { useState } from "react";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";

import "./ExercisePage.css";

const ExercisePage: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [displayExercise, setDisplayExercise] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(true);

  const increment = function () {
    setCounter(counter + 1);
  };

  const generateAuralExercise = function () {
    return "m2";
  };

  const checkAnswer = function (event: React.MouseEvent) {
    //change from displaying exercise to displaying answer
    setDisplayExercise(false);
    //grab clicked button value
    const answer = event.currentTarget.textContent;

    // check if answer is right
    if (generateAuralExercise() === answer) {
      setCorrectAnswer(true);
      return true;
    }
    setCorrectAnswer(false);
    return false;
  };

  const newExercise = function () {
    setDisplayExercise(true);
  };

  return (
    <main className="container">
      <div className="counter">
        <Counter counter={counter} />
      </div>

      <div>
        {displayExercise ? (
          <Exercise exercise="testexercise" />
        ) : (
          <Answer answer={correctAnswer} newExercise={newExercise} />
        )}
      </div>
      <div className="intervalButtons">
        <IntervalButtonGroup checkAnswer={checkAnswer} />
      </div>
    </main>
  );
};
export default ExercisePage;
