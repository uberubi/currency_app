import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        {/* <Navbar.Brand href="/ratelist">RATES&CONVERT</Navbar.Brand> */}
        <NavLink className="nav-link" to="/ratelist">
          <Navbar.Brand>RATES&CONVERT</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto font-weight-bold">
            <NavLink className="nav-link" to="/convertor">
              CONVERTOR
            </NavLink>
            <NavLink className="nav-link" to="/ratelist">
              EXCHANGE RATES
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
