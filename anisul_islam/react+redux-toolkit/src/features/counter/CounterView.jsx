import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementbyvalue, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementbyvalue(5));
        }}
      >
        Increase 5
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterView;