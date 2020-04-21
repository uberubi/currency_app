import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div>
        <NavLink to="/convertor" activeClassName={styles.active}>
          convertor
        </NavLink>
      </div>
      <div>
        <NavLink to="/ratelist" activeClassName={styles.active}>
          rate list
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
