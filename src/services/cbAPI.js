import axios from 'axios'

const instance = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/"
})

export const cbAPI = {
  async getCurrenciesList() {
    const data = await instance.get('daily_json.js')
    return data
  }
}