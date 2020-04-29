import React from "react";
import styles from "./RateList.module.css";

const RateList = (props) => {
  let currenciesSpread = props.currencies.sort().map((currency) => (
      <tr key={currency.CharCode}>
        <td>{currency.Nominal}</td>
        <td>{currency.Name}</td>
        <td>{currency.Value}</td>
        <td>({(currency.Value - currency.Previous).toFixed(1)})</td>
        <td>
          {props.favoriteCurrencies.some((cur) => cur.ID === currency.ID) ? (
            <button onClick={() => props.removeFavoriteCurrency(currency)}>
              Удалить из избранного
            </button>
          ) : (
            <button onClick={() => props.addFavoriteCurrency(currency)}>
              Добавить в избранное
            </button>
          )}
        </td>
      </tr>
  ));

  let favoriteCurrencies = props.favoriteCurrencies.map((currency) => {
    return (
      <tr key={currency.CharCode}>
        <td>{currency.Nominal}</td>
        <td>{currency.Name}</td>
        <td>{currency.Value}</td>
        <td>({(currency.Value - currency.Previous).toFixed(1)})</td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <table className={styles.table}>
          <caption>
            <h2>КУРС ЦБ РФ</h2>
            <div>Последнее обновление: {props.lastUpdate}</div>
            <div>
              <table className={styles.table}>
                <caption>
                  <h4>Избранные валюты</h4>
                </caption>
                <thead>
                  <tr>
                    <th>Единиц</th>
                    <th>Валюта</th>
                    <th>Курс</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {favoriteCurrencies ? favoriteCurrencies : ""}
                </tbody>
              </table>
            </div>
            <br></br>
          </caption>
          <thead>
            <tr>
              <th>Единиц</th>
              <th>Валюта</th>
              <th>Курс</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {currenciesSpread}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default RateList;
