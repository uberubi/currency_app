import React from "react";
import styles from "./Convertor.module.css";

const Convertor = (props) => {
  let state = props.currencies;
  let currenciesElement = state.map((currency) => (
    <option key={currency.CharCode}>{currency.Name}</option>
  ));
  return (
    <div className={styles.convertor}>
      <div>Выбор базовой валюты</div>
      <div>
        <select>{currenciesElement}</select>
      </div>

      <div className={styles.exchange}>
        <div>
          <div>
            <select>
              <option>USD</option>
              <option>EUR</option>
              <option>RUR</option>
            </select>
          </div>
          <div>
            <input></input>
          </div>
        </div>

        <div>
          <div>
            <select>
              <option>USD</option>
              <option>EUR</option>
              <option>RUR</option>
            </select>
          </div>
          <div>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertor;
