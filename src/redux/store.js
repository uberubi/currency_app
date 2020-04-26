import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import currenciesReducer from "./currencies-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({ 
 currencies: currenciesReducer 
})




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;