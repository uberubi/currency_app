import styles from "./ConvertorCard.module.scss";

const ConvertorCard = ({ currencies,convertedValue, handleSubmit, handleSelectChange, handleInputChange }) => {
  console.log(currencies);
  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <div className={styles.cardFrom}>
        <select id="currency-from" defaultValue={'default'} onChange={handleSelectChange}>
        <option value='default' disabled>Select your option</option>
          <option value='1'>Российский рубль</option>
          {Object.keys(currencies).map((currency) => (
            <option
              key={currencies[currency].ID}
              value={currencies[currency].Value / currencies[currency].Nominal}
            >
              {currencies[currency].Name}
            </option>
          ))}
        </select>
        <input type="text" onChange={handleInputChange}/>
      </div>
      <div className={styles.cardBtn}>
        <button>Convert</button>
      </div>
      <div className={styles.cardTo}>
        <select id="currency-to" defaultValue={'default'} onChange={handleSelectChange}>
        <option value={'default'} disabled>Select your option</option>
          <option value='1'>Российский рубль</option>
          {Object.keys(currencies).map((currency) => (
            <option
              key={currencies[currency].ID}
              value={currencies[currency].Value / currencies[currency].Nominal}
            >
              {currencies[currency].Name}
            </option>
          ))}
        </select>
      </div>
      <p>{convertedValue}</p>
    </form>
  );
};

export default ConvertorCard;
