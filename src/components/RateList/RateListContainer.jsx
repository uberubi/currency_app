import React from 'react'
import { compose } from 'redux'
import RateList from './RateList'
import { connect } from 'react-redux'
import { requestCurrencies } from '../../redux/currencies-reducer'


class RateListContainer extends React.Component {
  
  componentDidMount() {
    this.props.requestCurrencies()
  }
  
  render() {
    return <RateList {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    currencies: state.currencies.currencies
  }
}


export default compose(
  connect(mapStateToProps, { requestCurrencies })(RateListContainer))