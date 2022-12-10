import React, { useRef, useState } from "react";
import style from "./login.module.css";
import { NavLink } from "react-router-dom";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { Toast } from "../../components";

const Login = () => {
  const [eye, setEye] = useState(true);
  const inputType = useRef();
  const [pass, setPass] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const loginform = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.mainDiv}>
      <Toast />
      <div className={style.container}>
        <h1>Login</h1>
        <form onSubmit={(e) => loginform(e)}>
          <input
            type="email"
            placeholder="Email Address"
            required
            name="email"
            value={credentials.email}
            className={style.credentialField}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              pattern=".{8,}"
              value={credentials.password}
              ref={inputType}
              className={style.credentialField}
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
                let hello = e.target.value;
                hello.length < 7 ? setPass(false) : setPass(true);
              }}
            />
            <span
              onClick={() => {
                setEye(!eye);
                inputType.current.type === "text"
                  ? (inputType.current.type = "password")
                  : (inputType.current.type = "text");
              }}
            >
              {eye === true ? (
                <IoEyeSharp className={style.icon} />
              ) : (
                <IoEyeOffSharp className={style.icon} />
              )}
            </span>
          </div>
          <p className={pass ? style.hidden : style.show}>
            Password must contain atleast 8 characters
          </p>
          <input type="submit" className={style.btn} value="Login" />
        </form>
        <div className={style.linkDiv}>
          <NavLink to="/signup" className={style.link}>
            Create Account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
