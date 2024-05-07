const { applyMiddleware, createStore } = require("redux");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// state
const ADDPRODUCTS = "ADDPRODUCTS";
const REMOVEPRODUCTS = "REMOVEPRODUCTS";
const GETRODUCTS = "GETRODUCTS";

const inititalProductState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
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
const removeProduct = (product) => {
  return {
    type: REMOVEPRODUCTS,
    payload: product,
  };
};

// reducer fuction
const myReducer = (state = inititalProductState, action) => {
  switch (action.type) {
    case GETRODUCTS:
      return {
        ...state,
      };
    case ADDPRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    case REMOVEPRODUCTS:
      return {
        ...state,
        products: [
          state.products.filter((a) => {
            return a !== action.payload;
          }),
        ],
        numberOfProducts: state.products.includes(action.payload)?state.numberOfProducts-1: state.numberOfProducts,
      };
    default:
      return state;
  }
};

const store = createStore(myReducer, applyMiddleware(logger));

// store.subscribe(() => {
//   console.log(store.getState(), ++counterConsole);
// });
store.subscribe(() => {
  store.getState();
});

store.dispatch(addProduct("Laptop"));
store.dispatch(getProducts());
store.dispatch(removeProduct("Salt"));
