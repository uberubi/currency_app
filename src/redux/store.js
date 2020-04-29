import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import currenciesReducer from "./currencies-reducer";
import thunkMiddleware from "redux-thunk";
import convertorReducer from "./convertor-reducer";

let reducers = combineReducers({
  currencies: currenciesReducer,
  convertor: convertorReducer
});

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {

  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  reHydrateStore(),
  composeEnhancers(applyMiddleware(thunkMiddleware, 
    localStorageMiddleware
    ))
);
window.store = store;

export default store;