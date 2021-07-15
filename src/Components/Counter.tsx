import { useState } from "react";

type CounterProps = {
  counter?: number;
  exercise: string;
};
const Counter: React.FC<CounterProps> = ({ counter, exercise }) => {
  return (
    <div>
      {" "}
      {counter} {exercise} exercises correct in a row!
    </div>
  );
};
export default Counter;
