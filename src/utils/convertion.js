export const toConvert = (curFromName, curToName, curFromNumber, currenciesList) => {
  
  let curToNumber;

  if (curFromName === "Российский Рубль") {
    curToNumber = (curFromNumber / findCurrency(currenciesList, curToName).Value) * findCurrency(currenciesList, curToName).Nominal;
    return curToNumber.toFixed(2);
  } else if (curToName === "Российский Рубль") {
    curToNumber = (curFromNumber * findCurrency(currenciesList, curFromName).Value) / findCurrency(currenciesList, curFromName).Nominal;
    return curToNumber.toFixed(2);
  }
  
  let currencyRateFrom = findCurrency(currenciesList, curFromName).Value / findCurrency(currenciesList, curFromName).Nominal;
  let currencyRateTo = findCurrency(currenciesList, curToName).Value / findCurrency(currenciesList, curToName).Nominal;

  curToNumber = findConvertedCurrency(curFromNumber, currencyRateTo, currencyRateFrom)

  return curToNumber;
};



const findConvertedCurrency = (curFromNumber, currencyRateTo, currencyRateFrom) => {
  let convertedCurrency = curFromNumber / (currencyRateTo / currencyRateFrom)
  return convertedCurrency.toFixed(2)
}

const findCurrency = (allCurrencies, curName) => {
  let currency = allCurrencies.find(c => c.Name === curName)
  return currency
}