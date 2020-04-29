import React, { useState, useEffect } from "react";
import styles from "./Convertor.module.css";

const Convertor = (props) => {
  
  let [currenciesList, setCurrencyList] = useState(props.currencies);
  let [inputCurrency, setInputCurrency] = useState(props.inputCurrency);
  let [outputCurrency, setOutputCurrency] = useState(props.outputCurrency);
  let [currencyFrom, setCurrencyFrom] = useState(props.currencyFrom);
  let [currencyTo, setCurrencyTo] = useState(props.currencyTo);

  // useEffect( () => {
  //   setInputCurrency(0)
  //   setOutputCurrency(0)
  // }, [props.inputCurrency, props.outputCurrency] )

  const onInputChange = (e) => {
    setInputCurrency(e.currentTarget.value)
    setOutputCurrency(toConvert(currencyFrom, currencyTo, e.currentTarget.value, currenciesList)) 
  };
console.log(currencyFrom)
console.log(currencyTo)

  const toConvert = (curFromName, curToName, curFromNumber, currenciesList) => {
    let currencyRateFrom = currenciesList.find(c => c.Name === curFromName).Value
    let currencyRateTo = currenciesList.find(c => c.Name === curToName).Value
    let curToNumber = curFromNumber / (currencyRateTo / currencyRateFrom)
    return curToNumber
  }

  // const onOutputChange = (e) => {
  //   setOutputCurrency(e.currentTarget.value);
  // };

  const onOptionChangeFrom = (e) => {
    setCurrencyFrom(e.currentTarget.value);
  };

  const onOptionChangeTo = (e) => {
    setCurrencyTo(e.currentTarget.value);
  };


  let currenciesElement = props.currencies.map((currency) => (
    <option key={currency.CharCode}>{currency.Name}</option>
  ));

  return (
    <div className={styles.convertor}>
      <div className={styles.exchange}>
        <div>
          <div>
            <select onChange={onOptionChangeFrom}>
              <option disabled defaultValue >Выберите валюту</option>
              {currenciesElement}
            </select>
          </div>
          <div>
            <input value={inputCurrency} onChange={onInputChange}></input>
          </div>
        </div>

        <div>
          <div>
            <select onChange={onOptionChangeTo} >
              <option disabled selected >Выберите валюту</option>
              {currenciesElement}
            </select>
          </div>
          <div>
            <input value={outputCurrency}  readOnly></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertor;
