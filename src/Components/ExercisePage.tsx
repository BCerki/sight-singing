import { useState } from "react";
import { useLocation } from "react-router-dom";
//playing sound
import * as Tone from "tone";
//components
import Answer from "./Answer";
import Counter from "./Counter";
import Exercise from "./Exercise";
import IntervalButtonGroup from "./IntervalButtonGroup";
//styles
import "./ExercisePage.css";
//helpers
import exercise from "../Helpers/createExercise";
const { firstNote, secondNote, interval } = exercise;

//lodash array methods
const _ = require("lodash");

//state interfaces
interface AnswerState {
  display: boolean;
  userAnswer: string | null;
  isCorrect: boolean | null;
}

interface IntervalState {
  firstNote: string;
  secondNote: string;
  interval: any;
}

const ExercisePage: React.FC = () => {
  //answer state
  const initialAnswerState: AnswerState = {
    display: false,
    userAnswer: "",
    isCorrect: null,
  };
  const [answerState, setAnswerState] = useState(initialAnswerState);

  //interval state
  const newIntervalState: IntervalState = {
    firstNote,
    secondNote,
    interval,
  };
  const [intervalState, setIntervalState] = useState(newIntervalState);

  //counter state
  const [counter, setCounter] = useState(0);

  const increment = function () {
    setCounter(counter + 1);
  };

  //aural exercise functions
  const playAuralExercise = function () {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    const { firstNote, secondNote, interval } = intervalState;

    console.log(
      "first note is:",
      firstNote,
      "second note is:",
      secondNote,
      "interval is:",
      interval
    );
    synth.triggerAttackRelease(firstNote, "4n", now);
    synth.triggerAttackRelease(secondNote, "4n", now + 1);
  };

  //general exercise functions
  const checkAnswer = function (event: React.MouseEvent) {
    const correctInterval = intervalState.interval;
    const userInterval = event.currentTarget.textContent;
    const correctAnswer = correctInterval === userInterval ? true : false;

    setAnswerState({
      display: true,
      isCorrect: correctAnswer,
      userAnswer: userInterval,
    });

    if (correctAnswer) {
      increment();
    }
  };

  const newExercise = function () {
    setAnswerState(initialAnswerState);
    setIntervalState(newIntervalState);
  };

  //choose which exercise type to display
  const location = useLocation();
  const exerciseType: string = location.pathname.slice(1);

  if (answerState.display) {
    return (
      <Answer
        correctAnswer={answerState.isCorrect}
        interval={intervalState.interval}
        firstNote={intervalState.firstNote}
        secondNote={intervalState.secondNote}
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
          <Counter counter={counter} exercise={exerciseType} />
        </div>
      </div>
      <div className="intervalButtons">
        <IntervalButtonGroup checkAnswer={checkAnswer} />
      </div>
    </main>
  );
};
export default ExercisePage;
