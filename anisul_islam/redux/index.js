const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "Emad Uddin" }],
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Reducer function
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      state;
  }
};

// create store
// const store = createStore(counterReducer);
const userStore = createStore(userReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

userStore.subscribe(() => {
  console.log(userStore.getState());
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());

// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());

userStore.dispatch(addUser({ name: "Fahim" }));
