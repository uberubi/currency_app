import React from 'react'
import { compose } from 'redux'
import RateList from './RateList'
import { connect } from 'react-redux'
import { getCurrencies, addFavoriteCurrency, removeFavoriteCurrency } from '../../redux/currencies-reducer'


class RateListContainer extends React.Component {
  

  componentDidMount() {
    this.props.getCurrencies()
  }


  render() {
    return <RateList {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    currencies: state.currencies.currencies,
    lastUpdate: state.currencies.lastUpdate,
    favoriteCurrencies: state.currencies.favoriteCurrencies
  }
}


export default compose(
  connect(mapStateToProps, { getCurrencies, addFavoriteCurrency, removeFavoriteCurrency })(RateListContainer))