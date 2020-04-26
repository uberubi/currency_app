import { currenciesAPI } from "../api/api";

const SET_CURRENCIES = "SET_CURRENCIES"
const SET_LAST_UPDATE = "SET_LAST_UPDATE"
const SET_FAVORITE_CURRENCY = "SET_FAVORITE_CURRENCY"
const REMOVE_FAVORITE_CURRENCY = "REMOVE_FAVORITE_CURRENCY"

let initialState = {
  currencies: [
    // "EUR",
    // "USD",
    // "RUB",
  ],
  lastUpdate: '',
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.currencies }
    case SET_LAST_UPDATE: 
      return { ...state, lastUpdate: action.date }
    case SET_FAVORITE_CURRENCY:
      return { ...state, currencies: state.currencies.map(c => {
        if(c.NumCode === action.currency.NumCode) {
          return { ...c, favorite: true }
        }
          return c
      }) }
    case REMOVE_FAVORITE_CURRENCY:
      return { ...state, currencies: state.currencies.map(c => {
        if(c.NumCode === action.currency.NumCode) {
          return { ...c, favorite: false }
        }
          return c
      }) }
    default:
      return state;
  }
};

export const setCurrencies = (currencies) => ({ type: SET_CURRENCIES, currencies });
export const setLastUpdate = (date) => ({ type: SET_LAST_UPDATE, date })
export const addFavoriteCurrency = (currency) => ({ type: SET_FAVORITE_CURRENCY, currency })
export const removeFavoriteCurrency = (currency) => ({ type: REMOVE_FAVORITE_CURRENCY, currency })


export const getCurrencies = () => (dispatch) => {
  currenciesAPI.getAvaibleCurrencies().then(response => {
    let date = new Date(response.data.Timestamp).toLocaleString()
    dispatch(setCurrencies(Object.values(response.data.Valute)))
    dispatch(setLastUpdate(date))
  })
};


export default currenciesReducer