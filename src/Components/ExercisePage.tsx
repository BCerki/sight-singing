import { useState } from "react";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";

import "./ExercisePage.css";

const ExercisePage: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(true);

  const increment = function () {
    setCounter(counter + 1);
  };

  const generateAuralExercise = function () {
    return "m2";
  };

  const checkAnswer = function (event: React.MouseEvent) {
    //change from displaying exercise to displaying answer
    setDisplayAnswer(true);
    //grab clicked button value
    const answer = event.currentTarget.textContent;

    // check if answer is right
    if (generateAuralExercise() === answer) {
      setCorrectAnswer(true);
      increment();
      return true;
    }
    setCorrectAnswer(false);
    return false;
  };

  const newExercise = function () {
    setDisplayAnswer(false);
  };

  const exerciseProp = "aural"; //this will be how we select which one to show?

  if (displayAnswer) {
    return <Answer answer={correctAnswer} newExercise={newExercise} />;
  }
  return (
    <main className="container">
      <div>
        <div className="exercise">
          <Exercise exercise={exerciseProp} />
        </div>
        <div className="counter">
          <Counter counter={counter} />
        </div>
      </div>
      <div className="intervalButtons">
        <IntervalButtonGroup checkAnswer={checkAnswer} />
      </div>
    </main>
  );
};
export default ExercisePage;
