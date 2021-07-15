import Button from "@material-ui/core/Button";

type AnswerProps = {
  answer: boolean;
  newExercise: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Answer: React.FC<AnswerProps> = ({ answer, newExercise }) => {
  const marked = answer ? "You are correct!" : "Nope";

  return (
    <div>
      <div>{marked}</div>
      {/* <Button variant="contained">Repeat the exercise</Button> */}
      <Button onClick={newExercise} variant="contained">
        New exercise
      </Button>
    </div>
  );
};
export default Answer;
