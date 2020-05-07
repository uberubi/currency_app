import React, { useEffect } from "react";
import { compose } from "redux";
import RateList from "./RateList";
import { connect } from "react-redux";
import {
  getCurrencies,
  addFavoriteCurrency,
  removeFavoriteCurrency,
} from "../../redux/currencies-reducer";

const RateListContainer = ({getCurrencies, ...props}) => {
  
  useEffect(() =>  getCurrencies(), [getCurrencies]);

  return <RateList {...props} />;
};

let mapStateToProps = (state) => {
  return {
    currencies: state.currencies.currencies,
    lastUpdate: state.currencies.lastUpdate,
    favoriteCurrencies: state.currencies.favoriteCurrencies,
  };
};

export default compose(
  connect(mapStateToProps, { getCurrencies, addFavoriteCurrency, removeFavoriteCurrency })(
    RateListContainer
  )
);
