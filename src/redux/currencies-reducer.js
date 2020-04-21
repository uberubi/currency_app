import { currenciesAPI } from "../api/api";

const SET_CURRENCIES = "SET_CURRENCIES"

let initialState = {
  currencies: [
    "EUR",
    "USD",
    "RUB"
  ],
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies
      }
    default:
      return state;
  }
};

export const setCurrencies = (currencies) => ({ type: SET_CURRENCIES, currencies });

export const requestCurrencies = () => async (dispatch) => {
  let data = await currenciesAPI.getAvaibleCurrencies();
  dispatch(setCurrencies(data.currencies));
};

export default currenciesReducer