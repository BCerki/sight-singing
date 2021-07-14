type ExerciseProps = {
  exercise: string;
};

const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  return (
    <div>
      i am an image of a staff or a button to play some sound. i am
      exerciseprops: {exercise}
    </div>
  );
};
export default Exercise;
