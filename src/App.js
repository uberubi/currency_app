import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Convertor from "./pages/Convertor/Convertor";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/">
        <div className={styles.container}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/convertor" component={Convertor} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
