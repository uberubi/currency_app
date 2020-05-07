import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getConvertorList } from "../../redux/convertor-reducer";
import Convertor from "./Convertor";

const ConvertorContainer = ({ currencies, getConvertorList }) => {
  useEffect(() => {
    getConvertorList();
  }, [getConvertorList]);

  console.log("convertor container");
  
  return <Convertor currencies={currencies} getCurrenciesList={getConvertorList} />;
};

let mapStateToProps = (state) => {
  return {
    currencies: state.convertor.currencies,
  };
};

export default compose(connect(mapStateToProps, { getConvertorList })(ConvertorContainer));
