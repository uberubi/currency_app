import { currenciesAPI } from "../api/api";

const SET_CONVERTOR_LIST = "SET_CONVERTOR_LIST";
const SET_INPUT_CUR = "SET_INPUT_CUR";
const SET_OUTPUT_CUR = "SET_OUTPUT_CUR";
const SET_CURRENCY_FROM = "SET_CURRENCY_FROM";
const SET_CURRENCY_TO = "SET_CURRENCY_TO";

let initialState = {
  currencies: [],
  inputCurrency: '0',
  outputCurrency: '0',
  currencyFrom: "USD",
  selectedCurOutput: "EUR",
};

const convertorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONVERTOR_LIST:
      return { ...state, currencies: action.currencies };
    case SET_INPUT_CUR:
      return { ...state, inputCurrency: action.input };
    case SET_OUTPUT_CUR:
      return { ...state, outputCurrency: action.output };
      case SET_CURRENCY_FROM:
        return { ...state,  currencyFrom: action.select}
      case SET_CURRENCY_TO:
        return { ...state,  selectedCurOutput: action.currencyTo}
    default:
      return state;
  }
};

export const setConvertorList = (currencies) => ({ type: SET_CONVERTOR_LIST, currencies });
export const setInputCurrency = (input) => ({ type: SET_INPUT_CUR, input });
export const setOutputCurrency = (output) => ({ type: SET_OUTPUT_CUR, output });
export const setCurrencyFrom = (select) => ({ type: SET_CURRENCY_FROM, select });
export const setCurrencyTo = (select) => ({ type: SET_CURRENCY_TO, select });

export const getConvertorList = () => (dispatch) => {
  currenciesAPI.getAvaibleCurrencies().then((response) => {
    dispatch(setConvertorList(Object.values(response.data.Valute)));
  });
};

export default convertorReducer;
