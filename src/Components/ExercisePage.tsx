import { useState } from "react";
import { useLocation } from "react-router-dom";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";
import * as Tone from "tone";

import "./ExercisePage.css";

interface AnswerState {
  display: boolean;
  correctInterval: string;
  userInterval: string | null;
  correctAnswer: boolean | null;
}

const ExercisePage: React.FC = () => {
  const initialAnswerState: AnswerState = {
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

  const generateInterval = function () {
    return { firstNote: "E4", secondNote: "F4", interval: "m2" };
  };

  const playAuralExercise = function () {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    const firstNote = generateInterval().firstNote;
    const secondNote = generateInterval().secondNote;
    synth.triggerAttackRelease(firstNote, "4n", now);
    synth.triggerAttackRelease(secondNote, "4n", now + 1);
  };

  const checkAnswer = function (event: React.MouseEvent) {
    const correctInterval = generateInterval().interval;
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
          <Exercise
            exercise={exerciseType}
            playAuralExercise={playAuralExercise}
          />
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
