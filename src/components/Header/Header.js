import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/convertor">
            <li>Convertor</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
