import { useState } from "react";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";

import "./ExercisePage.css";

const ExercisePage: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [displayExercise, setDisplayExercise] = useState(true);

  const increment = function () {
    setCounter(counter + 1);
  };

  const checkAnswer = function (event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    if (target) console.log("target.value is", target.value);

    //change from displaying exercise to displaying answer
    setDisplayExercise(false);
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
          <Answer answer="true" newExercise={newExercise} />
        )}
      </div>
      <div className="intervalButtons">
        <IntervalButtonGroup checkAnswer={checkAnswer} />
      </div>
    </main>
  );
};
export default ExercisePage;
