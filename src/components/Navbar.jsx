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
        <a href="javascript:void(0)" className={style.btn}>
          Login
        </a>
        <a href="javascript:void(0)" className={style.btn}>
          Signup
        </a>
      </div>
    </header>
  );
};

export default Navbar;
