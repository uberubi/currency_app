import { combineReducers, createStore, applyMiddleware } from "redux";
import currenciesReducer from "./currencies-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({ 
 currencies: currenciesReducer 
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store