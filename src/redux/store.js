import { combineReducers, createStore } from "redux";
import currenciesReducer from "./currencies-reducer";

let reducers = combineReducers({ 
 currencies: currenciesReducer 
})

const store = createStore(reducers)

export default store