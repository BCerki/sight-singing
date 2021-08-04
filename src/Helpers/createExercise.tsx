//interval calculation
import { Note } from "@tonaljs/tonal";

//lodash array methods
const _ = require("lodash");

//interval state
const notes = [
  "Ab3",
  "A3",
  "A#3",
  "Bb3",
  "B3",
  "Cb3",
  "C3",
  "C#3",
  "Db3",
  "D3",
  "D#3",
  "Eb3",
  "E3",
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
  "Cb4",
  "C4",
  "C#4",
  "Db4",
  "D4",
  "D#4",
  "Eb4",
  "E4",
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
  "Cb5",
  "C5",
  "C#5",
  "Db5",
  "D5",
  "D#5",
  "Eb5",
  "E5",
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

const firstNoteIndex: number = _.sample(_.range(notes.length - 1));
const firstNote = notes[firstNoteIndex];

const intervalIndex: number = _.sample(_.range(intervals.length - 1));
const interval = intervals[intervalIndex];

const secondNote = Note.transpose(firstNote, interval);
const exercise = { firstNote, secondNote, interval };

export default exercise;
