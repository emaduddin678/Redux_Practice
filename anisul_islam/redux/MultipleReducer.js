const { createStore } = require("redux");

// state
const INCREMENT = "INCREMENT";
const INCREMENTBYVALUE = "INCREMENTBYVALUE";
const DECREMENT = "DECREMENT";
const ADDUSER = "ADDUSER";
const REMOVEUSER = "REMOVEUSER";
const ADDPRODUCTS = "ADDPRODUCTS";
const REMOVEPRODUCTS = "REMOVEPRODUCTS";
const GETRODUCTS = "GETRODUCTS";

const inititalState = {
  users: ["Emad"],
  count: 1,
};

const inititalProductState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
};

const initialState = {
  userState: {
    users: ["Emad"],
    count: 1,
  },
  productState: {
    products: ["Sugar", "Salt"],
    numberOfProducts: 2,
  },
};

// product action
const getProducts = () => {
  return {
    type: GETRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADDPRODUCTS,
    payload: product,
  };
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
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        userState: {
          ...state.userState,
          users: [...state.userState.users, action.payload],
          count: state.userState.count + 1,
        },
      };
    case REMOVEUSER:
      return {
        ...state,
        userState: state.userState.users.filter((a) => {
          return a !== action.payload.userState;
        }),
        count: state.userState.users.includes(action.payload.userState)
          ? state.count - 1
          : state.count,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case GETRODUCTS:
      return {
        ...state,
      };
    case ADDPRODUCTS:
      return {
        ...state,
        state: [...state.productState.products, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
});

console.log(initialState);
store.dispatch(addUser("Sakib"));
store.dispatch(addUser("Rakib"));
store.dispatch(addUser("Mofiz"));
// store.dispatch(addProduct("Laptop"));
