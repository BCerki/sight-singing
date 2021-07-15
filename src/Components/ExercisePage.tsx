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

//state interfaces
interface AnswerState {
  display: boolean;
  correctInterval: any;
  userInterval: string | null;
  correctAnswer: boolean | null;
}

interface IntervalState {
  firstNote: string;
  secondNote: string;
  interval: string | ((to: string) => string); //because TS made me
}

const ExercisePage: React.FC = () => {
  //answer state
  const initialAnswerState: AnswerState = {
    display: false,
    correctInterval: "",
    userInterval: "",
    correctAnswer: null,
  };

  const [answerState, setAnswerState] = useState(initialAnswerState);

  //interval state
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
  //reformat and simplify Tonal's intervals to our button ones
  const stringInterval: string = interval as string;
  const formattedInterval: string | string[] = stringInterval
    .split("")
    .reverse()
    .join("")
    .replace("-", "");

  let equivalentInterval = "";
  //still need to add double dim and aug FIX FIX
  switch (formattedInterval) {
    case "d2":
      equivalentInterval = "P1";
      break;
    case "A1":
      equivalentInterval = "m2";
      break;
    case "d3":
      equivalentInterval = "M2";
      break;
    case "A2":
      equivalentInterval = "m3";
      break;
    case "d4":
      equivalentInterval = "M3";
      break;
    case "A3":
      equivalentInterval = "P4";
      break;
    case "d5":
      equivalentInterval = "A4";
      break;
    case "d6":
      equivalentInterval = "P5";
      break;
    case "A5":
      equivalentInterval = "m6";
      break;
    case "d7":
      equivalentInterval = "M6";
      break;
    case "A6":
      equivalentInterval = "m7";
      break;
    case "d8":
      equivalentInterval = "M7";
      break;
    case "A7":
      equivalentInterval = "P8";
      break;
    default:
      equivalentInterval = formattedInterval;
  }

  const intervalState: IntervalState = {
    firstNote,
    secondNote,
    interval: equivalentInterval,
  };
  //counter state
  const [counter, setCounter] = useState(0);

  const increment = function () {
    setCounter(counter + 1);
  };
  //helper functions
  const playAuralExercise = function () {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    const { firstNote, secondNote, interval } = intervalState;

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
    const correctInterval = intervalState.interval;
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

  //choose which exercise type to display
  const location = useLocation();
  const exerciseType: string = location.pathname.slice(1);

  if (answerState.display) {
    return (
      <Answer
        correctAnswer={answerState.correctAnswer}
        correctInterval={answerState.correctInterval}
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
