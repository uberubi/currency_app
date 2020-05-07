import { currenciesAPI } from "../api/api";

const SET_CONVERTOR_LIST = "SET_CONVERTOR_LIST";


let initialState = {
  currencies: []
};

const convertorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONVERTOR_LIST:
      return { ...state, currencies: action.currencies };
    default:
      return state;
  }
};

export const setConvertorList = (currencies) => ({ type: SET_CONVERTOR_LIST, currencies });

export const getConvertorList = () => (dispatch) => {
  currenciesAPI.getAvaibleCurrencies().then((response) => {
    dispatch(setConvertorList(Object.values(response.data.Valute)));
  });
};

export default convertorReducer;
