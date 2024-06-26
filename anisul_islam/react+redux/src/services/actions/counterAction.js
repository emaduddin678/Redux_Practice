import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};

export { increment, decrement, reset };
