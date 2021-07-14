import Button from "@material-ui/core/Button";

type AnswerProps = {
  answer: string;
};

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const marked = answer ? "You are correct!" : "Nope";

  return (
    <div>
      <div>{marked}</div>
      <Button variant="contained">Repeat the exercise</Button>
      <Button variant="contained">New exercise</Button>
    </div>
  );
};
export default Answer;
