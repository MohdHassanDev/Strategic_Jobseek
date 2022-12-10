import React from "react";
import style from "./home.module.css";
import hire from "../../images/bg-img2.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AiOutlineCalculator, AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";

const Home = () => {
  return (
    <div className={style.mainDiv}>
      <Navbar />
      <div className={style.bg_img}>
        <img src={hire} alt="hire me image" />
        <h1>Create A Better Future For Yourself</h1>
      </div>
      <section className={style.about}>
        <h1>About us</h1>
        <p>
          There's nothing more personal than your own journey to
          success—whatever that means to you. So we built a platform that helps
          guide you through it. We use data-driven technology and personalized
          tools to help match employers with great candidates based on
          individual wants, needs, and unique skill sets. Because our goal is to
          help everyone find their version of success.
        </p>
      </section>
      <section className={style.howwe}>
        <h1>How We Make Your Job Search Easy</h1>
        <div>
          <div className={style.process}>
            <AiOutlineCalculator className={style.icons} />
            <h2>Salary Tools</h2>
            <p>
              See how your salary compares to others with the same job title in
              your area. Not only can you compare your salary, but you can also
              see what skills you are missing to earn more money.
            </p>
          </div>
          <div className={style.process}>
            <AiOutlineClockCircle className={style.icons} />
            <h2>Quick Apply</h2>
            <p>
              Easily apply to multiple jobs with one click! Quick Apply shows
              you recommended jobs based off your most recent search and allows
              you to apply to 25+ jobs in a matter of seconds!
            </p>
          </div>
          <div className={style.process}>
            <AiOutlineMail className={style.icons} />
            <h2>Job Alert Emails</h2>
            <p>
              Keep track of positions that you're interested in by signing up
              for job alert emails. You'll be notifed via email when new jobs
              are posted in that search.
            </p>
          </div>
        </div>
      </section>
      <section className={style.usa}>
        <h1>Explore Trending Jobs In USA</h1>
        <div>
          <div className={style.list}>
            <h2>TOP STATES</h2>
            <ul>
              <li>California</li>
              <li>Texas</li>
              <li>New York</li>
              <li>Ohio</li>
              <li>Pennsylvania</li>
            </ul>
          </div>
          <div className={style.list}>
            <h2>TOP CITIES</h2>
            <ul>
              <li>Seattle, WA</li>
              <li>Chicago, IL</li>
              <li>Dallas, TX</li>
              <li>Los Angeles, CA</li>
              <li>Orlando, FL</li>
            </ul>
          </div>
          <div className={style.list}>
            <h2>TOP JOB TITLES</h2>
            <ul>
              <li>Registered Nurse (RN)</li>
              <li>Medical Assistant</li>
              <li>Receptionist</li>
              <li>Administrative Assistant</li>
              <li>Web Developer</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
