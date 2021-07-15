import Button from "@material-ui/core/Button";

type AnswerProps = {
  correctAnswer: boolean | null;
  correctInterval: string;
  firstNote: string;
  secondNote: string;
  newExercise: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Answer: React.FC<AnswerProps> = ({
  correctAnswer,
  correctInterval,
  firstNote,
  secondNote,
  newExercise,
}) => {
  const marked = correctAnswer
    ? `Correct! The first note was ${firstNote} and the second was ${secondNote}. You correctly answered that the interval is ${correctInterval}`
    : `Incorrect. The first note was ${firstNote} and the second was ${secondNote}. The correct interval is ${correctInterval}.`;

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
