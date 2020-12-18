import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash.throttle";
import homeReducer from "./reducers/homeReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "../utils/localStorage.js";

let reducers = combineReducers({
  home: homeReducer,
});
const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  compose(applyMiddleware(thunkMiddleware), composeWithDevTools())
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
