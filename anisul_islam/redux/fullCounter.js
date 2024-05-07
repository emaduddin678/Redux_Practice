const { createStore } = require("redux");

// state
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const inititalState = {
  count: 0,
};

// action

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
    type: "RESET",
  };
};

// reducer fuction
const counterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 4,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(increment());
store.dispatch(increment());