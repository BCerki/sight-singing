import { FC } from 'react'
import Button from "@material-ui/core/Button";

type ExerciseProps = {
  exercise: string;
  playAuralExercise: () => void;
  showVisualExercise: FC;
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
    return <div>'&</div>;
  }
  return <div>I am a placeholder for the sing component</div>;
};
export default Exercise;