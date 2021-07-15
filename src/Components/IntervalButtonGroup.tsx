import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textTransform: "none",
    },
  },
}));

type IntervalButtonGroupProps = {
  checkAnswer: (event: React.MouseEvent) => void;
};

const IntervalButtonGroup: React.FC<IntervalButtonGroupProps> = ({
  checkAnswer,
}) => {
  const classes = useStyles();
  const intervalArray: string[] = [
    "P1",
    "m2",
    "M2",
    "m3",
    "M3",
    "P4",
    "P5",
    "m6",
    "M6",
    "m7",
    "M7",
    "P8",
  ]; //should we do diminished and augmented too? Doesn't matter for aural, but could for visual
  const intervalButtons = intervalArray.map((interval) => (
    <Button variant="contained" key={interval} onClick={checkAnswer}>
      {interval}
    </Button>
  ));

  return <div className={classes.root}>{intervalButtons}</div>;
};

export default IntervalButtonGroup;
