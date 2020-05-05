import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getConvertorList, setInputCurrency, setCurrencyFrom, setCurrencyTo } from "../../redux/convertor-reducer";
import Convertor from "./Convertor";

const ConvertorContainer = (props) => {
  useEffect(() => {
    props.getConvertorList();
  }, []);

  return <Convertor {...props} />;
};

let mapStateToProps = (state) => {
  return {
    currencies: state.convertor.currencies,
    inputCurrency: state.convertor.inputCurrency,
    outputCurrency: state.convertor.outputCurrency,
    currencyFrom: state.convertor.currencyFrom,
    currencyTo: state.convertor.currencyTo
  };
};

export default compose(connect(mapStateToProps, { getConvertorList, setInputCurrency, setCurrencyFrom, setCurrencyTo })(ConvertorContainer));
