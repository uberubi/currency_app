import React from "react";
import styles from "./RateList.module.css";
import { currenciesAPI } from "../../api/api";

const RateList = (props) => {
  currenciesAPI.getAvaibleCurrencies().then((response) => {
    console.log(response);
  });
  return (
    <div className={styles.rateList}>
      <div>
      Выбор базовой валюты
      </div>
      <div>
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option>RUB</option>
        </select>
      </div>
    </div>
  );
};

export default RateList;
