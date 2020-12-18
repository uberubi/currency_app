import { useState } from "react";
import { useSelector } from "react-redux";
import ConvertorCard from "../../components/ConvertorCard/ConvertorCard";

const Convertor = () => {
  const [currencyFromRate, setCurrencyFromRate] = useState(0);
  const [currencyToRate, setCurrencyToRate] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [convertedValue, setConvertedValue] = useState("");

  const { currencies } = useSelector((state) => state.home);

  console.log(convertedValue);
  const handleCurrencyChange = (e) => {
    if (e.target.id === "currency-from") {
      setCurrencyFromRate(Number(e.target.value));
    } else {
      setCurrencyToRate(Number(e.target.value));
    }
  };

  const handleSubmitConvertorCard = (e) => {
    e.preventDefault();
    setConvertedValue(
      ((currencyFromRate / currencyToRate) * multiplier).toFixed(2)
    );
  };

  const handleInputChange = (e) => {
    setMultiplier(Number(e.target.value));
  };

  return (
    <>
      <p>
        <i>Convert rates here</i>
      </p>
      <ConvertorCard
        currencies={currencies}
        convertedValue={convertedValue}
        handleSelectChange={handleCurrencyChange}
        handleSubmit={handleSubmitConvertorCard}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default Convertor;
