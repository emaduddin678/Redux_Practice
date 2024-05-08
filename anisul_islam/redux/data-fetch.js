const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const reduxLogger = require("redux-logger");
const { thunk } = require("redux-thunk");
const axios = require("axios");
const logger = reduxLogger.createLogger();

const API_URL = "https://jsonplaceholder.typicode.com/todosa";
// action variable
const GET_TODOS_REQ = "GET_TODOS_REQ";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

// state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// action
const getTodosReqest = () => {
  return {
    type: GET_TODOS_REQ,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

// reducer function
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosReqest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(getTodosFailed(errorMessage));
      });
  };
};

// redux store
const store = createStore(todosReducer, applyMiddleware(logger, thunk));

store.subscribe(() => store.getState());

store.dispatch(fetchData());
