import Button from "@material-ui/core/Button";

type AnswerProps = {
  answer: boolean;
  newExercise: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Answer: React.FC<AnswerProps> = ({ answer, newExercise }) => {
  const marked = answer ? "Correct!" : "Incorrect";

  return (
    <div>
      <h1>{marked}</h1>
      {/* <Button variant="contained">Repeat the exercise</Button> */}
      <Button onClick={newExercise} variant="contained">
        Next exercise
      </Button>
    </div>
  );
};
export default Answer;
