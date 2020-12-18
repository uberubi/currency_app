import styles from "./Row.module.scss";
import useDifference from "../../../hooks/useDifference";

const Row = ({ currency, handleClick }) => {
  const [diff, color] = useDifference(currency.Value, currency.Previous);
  return (
    <div onClick={handleClick} key={currency.ID} className={styles.Row}>
      <div className={styles.RowCell}>{currency.CharCode}</div>
      <div className={styles.RowCell}>{currency.Name}</div>
      <div className={styles.RowCell}>{currency.Nominal}</div>
      <div className={styles.RowCell}>{currency.Value}</div>
      <div className={styles.RowCell} style={{ color }}>
        {diff}
      </div>
    </div>
  );
};

export default Row;
