import Button from "@material-ui/core/Button";

type ExerciseProps = {
  exercise: string;
};

const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  if (exercise === "aural") {
    return <Button variant="contained">Play Interval</Button>;
  }
  return <div>I am a placeholder for the visual exercise component</div>;
};
export default Exercise;
