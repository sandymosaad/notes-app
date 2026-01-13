import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <img src={logo} alt="logo" className={style.logo} />
      <Link className={style.navLink} to="/">Notes App</Link>

      <ul className={style.links}>
        <li>
          <Link className={style.navLink} to="/">All Notes</Link>
        </li>
        <li>
          <Link className={style.navLink} to="/add">Add Note</Link>
        </li>
      </ul>
    </nav>
  );
}
