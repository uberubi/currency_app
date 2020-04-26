import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getCurrencies } from '../../redux/currencies-reducer'
import Convertor from './Convertor'


class ConvertorContainer extends React.Component {
  
  componentDidMount() {
    this.props.getCurrencies()
  }
  
  render() {
    return <Convertor {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    currencies: state.currencies.currencies
  }
}


export default compose(
  connect(mapStateToProps, { getCurrencies })(ConvertorContainer))