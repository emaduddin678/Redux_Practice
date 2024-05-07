const { createStore } = require("redux");

// state
const INCREMENT = "INCREMENT";
const INCREMENTBYVALUE = "INCREMENTBYVALUE";
const DECREMENT = "DECREMENT";
const ADDUSER = "ADDUSER";
const REMOVEUSER = "REMOVEUSER";
const inititalState = {
  users: ["Emad"],
  count: 1,
};

// action

const addUser = (value) => {
  return {
    type: ADDUSER,
    payload: value,
  };
};
const removerUser = (value) => {
  return {
    type: REMOVEUSER,
    payload: value,
  };
};

const incrementByValue = (value) => {
  return {
    type: INCREMENTBYVALUE,
    payload: value,
  };
};
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
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADDUSER:
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    case REMOVEUSER:
      return {
        ...state,
        users: state.users.filter((a) => {
          return a !== action.payload;
        }),
        count: state.users.includes(action.payload)
          ? state.count - 1
          : state.count,
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

store.dispatch(addUser("Fahim"));
store.dispatch(addUser("Sakib"));
store.dispatch(addUser("Fajil"));
store.dispatch(removerUser("Sakib"));
store.dispatch(removerUser("Sakib"));
store.dispatch(addUser("Nayemul"))
store.dispatch(removerUser("Emad"))