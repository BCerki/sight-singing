import Button from "@material-ui/core/Button";

type AnswerProps = {
  correctAnswer: boolean | null;
  correctInterval: string;
  newExercise: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Answer: React.FC<AnswerProps> = ({
  correctAnswer,
  correctInterval,
  newExercise,
}) => {
  const marked = correctAnswer
    ? "Correct!"
    : `Incorrect. The answer was ${correctInterval}.`;

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
