//interval calculation
import { Note, Interval } from "@tonaljs/tonal";
import { allowedNodeEnvironmentFlags } from "process";

//lodash array methods
const _ = require("lodash");

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

const intervals = [
  "P1",
  "m2",
  "M2",
  "m3",
  "M3",
  "P4",
  "A4",
  "P5",
  "m6",
  "M6",
  "m7",
  "M7",
  "P8",
];

const listAscending = function () {
  const allAscending = [];
  //create an object for each possible ascending interval from our chosen notes
  for (const note of notes) {
    for (const interval of intervals) {
      allAscending.push({
        firstNote: note,
        interval: interval,
        secondNote: Note.transpose(note, interval),
      });
    }
  }
  //remove anything in octaves < 4 and > 6
  const cleaned = allAscending.filter(
    (element) =>
      Number(element.secondNote.slice(element.secondNote.length - 1)) > 4 &&
      Number(element.secondNote.slice(element.secondNote.length - 1)) < 6 &&
      Number(element.firstNote.slice(element.firstNote.length - 1)) > 4 &&
      Number(element.firstNote.slice(element.firstNote.length - 1)) < 6
  );

  return cleaned;
};
console.log("listAscening is:", listAscending());

const listDescending = function () {
  const allDescending = [];
  //create an object for each possible descending interval from our chosen notes
  for (const note of notes) {
    for (const interval of intervals) {
      allDescending.push({
        firstNote: Note.transpose(note, interval),
        interval: interval,
        secondNote: note,
      });
    }
  }

  //remove anything in octaves < 4 and > 6
  const cleaned = allDescending.filter(
    (element) =>
      Number(element.secondNote.slice(element.secondNote.length - 1)) > 4 &&
      Number(element.secondNote.slice(element.secondNote.length - 1)) < 6 &&
      Number(element.firstNote.slice(element.firstNote.length - 1)) > 4 &&
      Number(element.firstNote.slice(element.firstNote.length - 1)) < 6
  );

  return cleaned;
};
console.log("list descending is", listDescending());

// const firstNoteIndex: number = _.sample(_.range(notes.length - 1));
// const firstNote = notes[firstNoteIndex];

// const intervalIndex: number = _.sample(_.range(intervals.length - 1));
// const interval = intervals[intervalIndex];

// const secondNote = Note.transpose(firstNote, interval);

const listAll = listAscending().concat(listDescending());

console.log("list all is", listAll);

const exercise = function () {
  return _.sample(listAll);
};
console.log("exercise is", exercise());

export default exercise;
