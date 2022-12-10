import React from "react";
import style from "./component.module.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>STRATEGIC JOBSEEK</h1>
        <ul className={style.iconDiv}>
          <li>
            <span>
              <FaFacebookF className={style.icon} />
            </span>
          </li>
          <li>
            <span>
              <FaInstagram className={style.icon} />
            </span>
          </li>
          <li>
            <span>
              <FaTwitter className={style.icon} />
            </span>
          </li>
          <li>
            <span>
              <FaYoutube className={style.icon} />
            </span>
          </li>
        </ul>
      </div>
      <hr />
      <div>Copyright &#169; 2022 Strategic Jobseek | All rights Reserved</div>
    </footer>
  );
};

export default Footer;
