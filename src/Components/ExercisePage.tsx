import { useState } from "react";
import { useLocation } from "react-router-dom";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";

import "./ExercisePage.css";

interface State {
  display: boolean;
  correctInterval: string;
  userInterval: string | null;
  correctAnswer: boolean | null;
}

const ExercisePage: React.FC = () => {
  const initialAnswerState: State = {
    display: false,
    correctAnswer: null,
    correctInterval: "",
    userInterval: "",
  };

  const [answerState, setAnswerState] = useState(initialAnswerState);

  const [counter, setCounter] = useState(0);

  const increment = function () {
    setCounter(counter + 1);
  };

  const generateAuralExercise = function () {
    return "m2";
  };

  const checkAnswer = function (event: React.MouseEvent) {
    const correctInterval = generateAuralExercise();
    const userInterval = event.currentTarget.textContent;

    const correctAnswer = correctInterval === userInterval ? true : false;

    setAnswerState({
      display: true,
      correctAnswer: correctAnswer,
      correctInterval: correctInterval,
      userInterval: userInterval,
    });

    if (correctAnswer) {
      increment();
    }
  };

  const newExercise = function () {
    setAnswerState(initialAnswerState);
  };

  const location = useLocation();
  const exerciseType = location.pathname;

  if (answerState.display) {
    return (
      <Answer
        correctAnswer={answerState.correctAnswer}
        correctInterval={answerState.correctInterval}
        newExercise={newExercise}
      />
    );
  }
  return (
    <main className="container">
      <div>
        <div className="exercise">
          <Exercise exercise={exerciseType} />
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
