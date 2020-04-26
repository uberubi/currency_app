import React from "react";
import styles from "./RateList.module.css";



const RateList = props => {
  // console.log(props.lastUpdate);

  // let [currencies, addFavoriteCurrency] = useState(props.currencies)
  
  // useEffect( () => {
  //   addFavoriteCurrency(props.currencies)
  // }, [props.currencies])

  let currenciesSpread = props.currencies.map((currency) => (
    <tbody key={currency.CharCode}>
      <tr onClick={() => props.addFavoriteCurrency(currency)}>
        <td>{currency.NumCode}</td>
        <td>{currency.CharCode}</td>
        <td>{currency.Nominal}</td>
        <td>{currency.Name}</td>
        <td>{currency.Value}</td>
        <td>({(currency.Value - currency.Previous).toFixed(1)})</td>
      </tr>
    </tbody>
  ));

  let favoriteCurrencies = props.currencies.map((currency) => {
    if (currency.favorite) {
      return (
        <tbody key={currency.CharCode}>
          <tr onClick={() => props.removeFavoriteCurrency(currency)}>
            <td>{currency.NumCode}</td>
            <td>{currency.CharCode}</td>
            <td>{currency.Nominal}</td>
            <td>{currency.Name}</td>
            <td>{currency.Value}</td>
            <td>({(currency.Value - currency.Previous).toFixed(1)})</td>
          </tr>
        </tbody>
      );
    }
    return null
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
                    <th>Цифр. код</th>
                    <th>Букв. код</th>
                    <th>Единиц</th>
                    <th>Валюта</th>
                    <th>Курс</th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <td>840</td>
                    <td>USD</td>
                    <td>1</td>
                    <td>Доллар США</td>
                    <td>74.0123</td>
                    <td>(-0.4)</td>
                  </tr>
                </tbody> */}
                {favoriteCurrencies ? favoriteCurrencies : ''}
              </table>
            </div>
            <br></br>
          </caption>
          <thead>
            <tr>
              <th>Цифр. код</th>
              <th>Букв. код</th>
              <th>Единиц</th>
              <th>Валюта</th>
              <th>Курс</th>
            </tr>
          </thead>
          {currenciesSpread}
        </table>
      </div>
    </div>
  );
};

export default RateList;
