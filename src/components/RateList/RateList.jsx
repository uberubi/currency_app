import React from "react";
import styles from "./RateList.module.css";
import { currenciesAPI } from "../../api/api";
import CurrencyList from "./CurrencyList/CurrencyList";

const RateList = (props) => {

  return (
    <div className={styles.rateList}>
      <CurrencyList  {...props}/>
    </div>

  );
};

export default RateList;
