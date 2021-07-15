import { useState } from "react";
import { useLocation } from "react-router-dom";
import IntervalButtonGroup from "./IntervalButtonGroup";
import Counter from "./Counter";
import Exercise from "./Exercise";
import Answer from "./Answer";
//playing sound
import * as Tone from "tone";
//music theory
import { Note, Interval, Distance, Scale, Chord } from "tonal";

import "./ExercisePage.css";

//lodash array methods
const _ = require("lodash");

interface AnswerState {
  display: boolean;
  correctInterval: any;
  userInterval: string | null;
  correctAnswer: boolean | null;
}

const ExercisePage: React.FC = () => {
  const initialAnswerState: AnswerState = {
    display: false,
    correctInterval: "",
    userInterval: "",
    correctAnswer: null,
  };

  const [answerState, setAnswerState] = useState(initialAnswerState);

  const [counter, setCounter] = useState(0);

  const increment = function () {
    setCounter(counter + 1);
  };

  const generateInterval = function () {
    const octave: number = _.sample(_.range(2, 6));

    const firstNote =
      _.sample(["A", "B", "C", "D", "E", "F", "G"]) +
      _.sample(["b", "#", ""]) +
      octave;

    const secondNote =
      _.sample(["A", "B", "C", "D", "E", "F", "G"]) +
      _.sample(["b", "#", ""]) +
      octave;

    const interval = Distance.interval(firstNote, secondNote);

    return { firstNote, secondNote, interval };
  };

  const playAuralExercise = function () {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    const { firstNote, secondNote, interval } = generateInterval();

    console.log(
      "first note",
      firstNote,
      "second note",
      secondNote,
      "interval",
      interval
    );
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
