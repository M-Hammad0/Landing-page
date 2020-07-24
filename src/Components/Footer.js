import React from "react";
import logo from '../images/logo.svg'
import icon1 from '../images/icon-location.svg'
import icon2 from '../images/icon-phone.svg'
import icon3 from '../images/icon-email.svg'

function Footer() {
  return (
    <div>
      <section id="footer">
        <div></div>
        <div className="footer-box row">
          <div className="footer-logo col-lg-12">
            <img src={logo} alt="" />
          </div>
          <div className="col-lg-3 col-md-3 ">
            <img className="location-icon" src={icon1} alt="" />
            <span className="lorem-ipsum">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
          <div className="col-lg-3 col-md-3 ">
            <p>
              <img className="footer-icon" src={icon2} alt="" />
              +1-543-123-4567
            </p>

            <p>
              <img className="footer-icon" src={icon3} alt="" />
              example@fylo.com
            </p>
          </div>
          <div className="col-lg-3 col-md-3 ">
            <ul className="list">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3">
            <ul className="list">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.github.com/M-Hammad0">Mohammad Hammad</a>.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
