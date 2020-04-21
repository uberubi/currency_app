import * as axios from "axios";

export const currenciesAPI = {
  getAvaibleCurrencies() {
    return axios({
      "method":"GET",
      "url":"https://currency23.p.rapidapi.com/currencyToAll",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"currency23.p.rapidapi.com",
      "x-rapidapi-key":"4a0d51e81emsh2267169466007c6p199177jsn462ce44b4a89"
      },"params":{
      "int":"1",
      "base":"USD"
      }
      })
  }
};
