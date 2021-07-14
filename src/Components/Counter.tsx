import { useState } from "react";

type CounterProps = {
  counter?: number;
};
const Counter: React.FC<CounterProps> = ({ counter }) => {
  return <div> {counter} exercises correct in a row!</div>;
};
export default Counter;
