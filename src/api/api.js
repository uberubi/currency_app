import * as axios from "axios";

export const currenciesAPI = {
  getAvaibleCurrencies() {
    return axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
  }
};

