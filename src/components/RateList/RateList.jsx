import React from "react";
import { Table, Button } from "react-bootstrap";

const RateList = (props) => {
  let currenciesSpread = props.currencies.sort().map((currency) => (
    <tr key={currency.CharCode}>
      <td>{currency.Nominal}</td>
      <td>{currency.Name}</td>
      <td>{currency.Value}</td>
      <td>({(currency.Value - currency.Previous).toFixed(1)})</td>
      <td>
        {props.favoriteCurrencies.some((cur) => cur.ID === currency.ID) ? (
          <Button size="sm" variant="danger" onClick={() => props.removeFavoriteCurrency(currency)}>
            удалить
          </Button>
        ) : (
          <Button size="sm" variant="success" onClick={() => props.addFavoriteCurrency(currency)}>добавить</Button>
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
    <>
      <h4 className="mt-3 text-uppercase text-center">КУРС ЦБ РФ</h4>
      <h5><center>Избранные валюты</center></h5>
      <div>Последнее обновление: {props.lastUpdate}</div>
      <Table  size="sm" striped bordered hover variant="light" className="text-center">
        <thead className="text-center">
        
          <tr>
            <th>Единиц</th>
            <th>Валюта</th>
            <th>Курс</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{favoriteCurrencies ? favoriteCurrencies : ""}</tbody>
      </Table>
      <h5><center>Список валют</center></h5>
      <Table size="sm" striped bordered hover variant="light" className="text-center">
        <thead>
          <tr>
            <th>Единиц</th>
            <th>Валюта</th>
            <th>Курс</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{currenciesSpread}</tbody>
      </Table>
    </>
  );
};

export default RateList;
