import React from "react";
import styles from "./Convertor.module.css";

const Convertor = (props) => {
  let state = props.currencies;
  let currenciesElement = state.map((currency) => <option>{currency.Name}</option>);
  return (
    <div className={styles.convertor}>
      <div>Выбор базовой валюты</div>
      <div>
        <select>{currenciesElement}</select>
      </div>
    </div>
  );
};

export default Convertor;
