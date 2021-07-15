import Button from "@material-ui/core/Button";

type ExerciseProps = {
  exercise: string;
};

const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  if (exercise === "/aural") {
    return <Button variant="contained">Play Interval</Button>;
  }
  if (exercise === "/visual") {
    return <div>I am a placeholder for the visual component</div>;
  }
  return <div>I am a placeholder for the sing component</div>;
};
export default Exercise;
