import Button from "@material-ui/core/Button";

import "./Exercise.css";

type showVisualProps = {
  firstNote: string,
  secondNote: string
}

type ExerciseProps = {
  exercise: string;
  playAuralExercise: () => void;
  showVisualExercise: showVisualProps;
};

const Exercise: React.FC<ExerciseProps> = ({ exercise, playAuralExercise, showVisualExercise }) => {
  if (exercise === "aural") {
    return (
      <Button variant="contained" onClick={playAuralExercise}>
        Play Interval
      </Button>
    );
  }
  if (exercise === "visual") {
    const {firstNote, secondNote} = showVisualExercise;
    // Uses musiqwik font symbols to display treble clef notes, with the two intervals as variables.
    return <div className="font-face-mq">{`'&=${firstNote}==${secondNote}=.`}</div>
  }
  return <div>I am a placeholder for the sing component</div>;
};
export default Exercise;