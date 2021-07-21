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
import Vex from 'vexflow';
// import SheetMusic from '@slnsw/react-sheet-music';  


import "./ExercisePage.css";

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
  interval: string;
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
  const notes = [
    "Ab3",
    "A3",
    "A#3",
    "Bb3",
    "B3",
    "B#3",
    "Cb3",
    "C3",
    "C#3",
    "Db3",
    "D3",
    "D#3",
    "Eb3",
    "E3",
    "E#3",
    "Fb3",
    "F3",
    "F#3",
    "Gb3",
    "G3",
    "G#3",
    "Ab4",
    "A4",
    "A#4",
    "Bb4",
    "B4",
    "B#4",
    "Cb4",
    "C4",
    "C#4",
    "Db4",
    "D4",
    "D#4",
    "Eb4",
    "E4",
    "E#4",
    "Fb4",
    "F4",
    "F#4",
    "Gb4",
    "G4",
    "G#4",
    "Ab5",
    "A5",
    "A#5",
    "Bb5",
    "B5",
    "B#5",
    "Cb5",
    "C5",
    "C#5",
    "Db5",
    "D5",
    "D#5",
    "Eb5",
    "E5",
    "E#5",
    "Fb5",
    "F5",
    "F#5",
    "Gb5",
    "G5",
    "G#5",
  ];

  const firstNoteIndex: number = _.sample(_.range(notes.length - 1));
  const firstNote = notes[firstNoteIndex];

  const getSecondNoteIndex = function (
    firstNoteIndex: number,
    notesArray: string[]
  ) {
    let secIndex: undefined | number = undefined;
    while (!secIndex || secIndex < 0 || secIndex > notesArray.length) {
      secIndex = firstNoteIndex + _.sample(_.range(-22, 22)); //22 keeps the interval from being larger than a P8
    }

    return secIndex;
  };

  const secondNoteIndex = getSecondNoteIndex(firstNoteIndex, notes);
  const secondNote = notes[secondNoteIndex];
  // console.log(
  //   "getSecondNoteIndex is",
  //   secondNoteIndex,
  //   "secondNote is",
  //   secondNote
  // );

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

  const newIntervalState: IntervalState = {
    firstNote,
    secondNote,
    interval: equivalentInterval,
  };

  const [intervalState, setIntervalState] = useState(newIntervalState);
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

  const showVisualExercise = function () {
    const VF = Vex.Flow;

    const vf = new VF.Factory({
      renderer: {elementId: 'boo', width: 500, height: 200}
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'}), score.options)
      ]
    }).addClef('treble').addTimeSignature('4/4');

    vf.draw();

    return <div id="boo"></div>

  }

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
            showVisualExercise={showVisualExercise}
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
