import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  console.log("redux store count: ", count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
    console.log("Hello")
  };
  return (
    <div>
      <h1>My Counter Value: {count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
