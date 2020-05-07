import { currenciesAPI } from "../api/api";

const SET_CURRENCIES = "SET_CURRENCIES";
const SET_LAST_UPDATE = "SET_LAST_UPDATE";
const ADD_FAVORITE_CURRENCY = "ADD_FAVORITE_CURRENCY";
const REMOVE_FAVORITE_CURRENCY = "REMOVE_FAVORITE_CURRENCY";

let initialState = {
  currencies: [],
  lastUpdate: "",
  favoriteCurrencies: [],
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.currencies };
      // return { ...state, currencies: Object.values([...action.currencies, ...state.currencies].reduce((acc, n) => (!acc[n.ID] && (acc[n.ID] = n), acc), {})) };
    case SET_LAST_UPDATE:
      return { ...state, lastUpdate: action.date };
    case ADD_FAVORITE_CURRENCY:
      return {
        ...state,
        favoriteCurrencies: [...state.favoriteCurrencies, action.currency],
      };
    case REMOVE_FAVORITE_CURRENCY:
      return {
        ...state,
        favoriteCurrencies: state.favoriteCurrencies.filter((c) => c.ID !== action.currency.ID),
      };
    default:
      return state;
  }
};

export const setCurrencies = (currencies) => ({ type: SET_CURRENCIES, currencies });
export const setLastUpdate = (date) => ({ type: SET_LAST_UPDATE, date });
export const addFavoriteCurrency = (currency) => ({ type: ADD_FAVORITE_CURRENCY, currency });
export const removeFavoriteCurrency = (currency) => ({ type: REMOVE_FAVORITE_CURRENCY, currency });

export const getCurrencies = () => (dispatch) => {
  currenciesAPI.getAvaibleCurrencies().then((response) => {
    let date = new Date(response.data.Timestamp).toLocaleString();
    dispatch(setCurrencies(Object.values(response.data.Valute)));
    dispatch(setLastUpdate(date));
  });
};
// export const getCurrencies = () => async (dispatch) => {
//   let response = await currenciesAPI.getAvaibleCurrencies()
//     let date = new Date(response.data.Timestamp).toLocaleString();
//     dispatch(setCurrencies(Object.values(response.data.Valute)));
//     dispatch(setLastUpdate(date));
// };

export default currenciesReducer;
