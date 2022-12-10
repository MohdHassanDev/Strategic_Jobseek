import React, { useRef, useState } from "react";
import style from "./signup.module.css";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Base_URI from "../../core";
import { toast } from "react-toastify";
import { Toast } from "../../components";

const Signup = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const inputType = useRef();
  const [pass, setPass] = useState(true);
  const [credentials, setCredentials] = useState({
    first: "",
    last: "",
    contact: "",
    email: "",
    password: "",
  });
  const signupform = async (e) => {
    e.preventDefault();
    const userObj = {
      username: credentials.first + " " + credentials.last,
      contact: credentials.contact,
      email: credentials.email,
      password: credentials.password,
    };
    try {
      const response = await axios.post(`${Base_URI}signup`, userObj);
      console.log(response);
      if (response.data.message === "Signup Successfull") {
        toast.success("Signup Successfully");
        navigate("/login");
      } else {
        toast.error("Already a user");
      }
    } catch (error) {
      toast.error("Please try again");
      console.log(error);
    }
    setCredentials({
      first: "",
      last: "",
      contact: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className={style.mainDiv}>
      <Toast />
      <div className={style.container}>
        <h1>Create Account</h1>
        <form onSubmit={(e) => signupform(e)}>
          <div className={style.name}>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              required
              value={credentials.first}
              className={style.credentialField}
              onChange={(e) =>
                setCredentials({ ...credentials, first: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              name="lname"
              value={credentials.last}
              className={style.credentialField}
              onChange={(e) =>
                setCredentials({ ...credentials, last: e.target.value })
              }
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            name="phone"
            value={credentials.contact}
            className={style.credentialField}
            onChange={(e) =>
              setCredentials({ ...credentials, contact: e.target.value })
            }
          />
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
          <div className={style.password}>
            <input
              type="password"
              placeholder="Password"
              required
              ref={inputType}
              pattern=".{8,}"
              value={credentials.password}
              className={style.credentialField}
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
                credentials.password.length < 7
                  ? setPass(false)
                  : setPass(true);
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
          <input type="submit" className={style.btn} value="Sign Up" />
        </form>
        <div className={style.linkDiv}>
          already have an account?
          <NavLink to="/login" className={style.link}>
            Login here.
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
