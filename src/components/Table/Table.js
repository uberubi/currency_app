import { useSelector, useDispatch } from "react-redux";
import {
  setFavoriteCurrency,
  removeFavoriteCurrency,
} from "../../redux/actions/homeActions";
import styles from "./Table.module.scss";
import Row from "./Row/Row";

const Table = () => {
  const { currencies, favoriteCurrencies } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleClickAddFavorite = (currency) => {
    dispatch(setFavoriteCurrency(currency));
  };
  const handleClickRemoveFavorite = (currency) => {
    dispatch(removeFavoriteCurrency(currency));
  };
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.tableCaption}>
          FAVORITE CURRENCIES
          <br />
          add favorite currencies by click on them
        </div>
        <div className={styles.tableBody}>
          {Object.keys(favoriteCurrencies).map((currency) => (
            <Row
              key={currencies[currency].ID}
              currency={currencies[currency]}
              handleClick={() =>
                handleClickRemoveFavorite(currencies[currency])
              }
            />
          ))}
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableCaption}>CURRENCIES</div>
        <div className={styles.tableBody}>
          {Object.keys(currencies)
            .filter((currency) => {
              return !(currency in favoriteCurrencies);
            })
            .map((currency) => (
              <Row
                key={currencies[currency].ID}
                currency={currencies[currency]}
                handleClick={() => handleClickAddFavorite(currencies[currency])}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
