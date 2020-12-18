import {
  SET_CURRENCIES,
  SET_LOADING_CURRENCIES,
  SET_LAST_UPDATE,
  SET_FAVORITE_CURRENCY,
  REMOVE_FAVORITE_CURRENCY,
} from "../constants/constants";

let initialState = {
  currencies: {},
  lastUpdate: "",
  isLoading: true,
  favoriteCurrencies: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.currencies };
    case SET_LOADING_CURRENCIES:
      return { ...state, isLoading: action.isLoading };
    case SET_LAST_UPDATE:
      return { ...state, lastUpdate: action.lastUpdate };
    case SET_FAVORITE_CURRENCY:
      return {
        ...state,
        favoriteCurrencies: {
          ...state.favoriteCurrencies,
          [action.currency.CharCode]: action.currency,
        },
      };
    case REMOVE_FAVORITE_CURRENCY:
      return {
        ...state,
        favoriteCurrencies: action.favoriteCurrencies
      };
    default:
      return state;
  }
};

export default homeReducer;
