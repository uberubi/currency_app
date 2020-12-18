import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { getCurrencies } from "../../redux/actions/homeActions";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Home = () => {
  const dispatch = useDispatch();
  const { currencies, isLoading, lastUpdate } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <>
      <p>
        <i>Last update on {dayjs(lastUpdate).format("LLL")}</i>
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table currencies={currencies} />
      )}
    </>
  );
};

export default Home;
