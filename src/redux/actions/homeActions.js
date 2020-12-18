import { cbAPI } from "../../services/cbAPI";
import {
  SET_CURRENCIES,
  SET_LOADING_CURRENCIES,
  SET_LAST_UPDATE,
  SET_FAVORITE_CURRENCY,
  REMOVE_FAVORITE_CURRENCY,
} from "../constants/constants";

const setCurrencies = (currencies) => ({ type: SET_CURRENCIES, currencies });
const setLoadingCurrencies = (isLoading) => ({
  type: SET_LOADING_CURRENCIES,
  isLoading,
});
export const setFavoriteCurrency = (currency) => ({
  type: SET_FAVORITE_CURRENCY,
  currency,
});

export const removeFavoriteCurrency = (currency) => (dispatch, getState) => {
  const favoriteCurrencies = getState().home.favoriteCurrencies;
  delete favoriteCurrencies[currency.CharCode];
  dispatch({ type: REMOVE_FAVORITE_CURRENCY, favoriteCurrencies });
};
const setLastUpdate = (lastUpdate) => ({ type: SET_LAST_UPDATE, lastUpdate });

export const getCurrencies = () => async (dispatch) => {
  dispatch(setLoadingCurrencies(true));
  const data = await cbAPI.getCurrenciesList();
  const currencies = data.data.Valute;
  const lastUpdate = data.data.Date;
  dispatch(setLastUpdate(lastUpdate));
  dispatch(setCurrencies(currencies));
  dispatch(setLoadingCurrencies(false));
};
