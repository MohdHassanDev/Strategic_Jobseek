import React from "react";
import { NavLink } from "react-router-dom";
import style from "./component.module.css";

const Navbar = () => {
  return (
    <header>
      <h1>STRATEGIC JOBSEEK</h1>
      <div>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
        <li className={style.link}>Find Jobs</li>
        <li className={style.link}>Upload/Build Resume</li>
        <NavLink to="/login" className={style.btn}>
          Login
        </NavLink>
        <NavLink to="/signup" className={style.btn}>
          Signup
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
