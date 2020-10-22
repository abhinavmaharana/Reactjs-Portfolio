import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://www.facebook.com/abhinav.maharana.1">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/abhinavmaharana/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/abhinav_maharana/">
          <FaInstagram />
        </a>
        <a href="https://github.com/abhinavmaharana">
          <FaGithub />
        </a>
      </div>
      <div className="copyright">
        <h5>Created with love by Abhinav Maharana</h5>
        <h5>© Copyright reserved to AM Portfolio.</h5>
      </div>
    </div>
  );
}

export default Footer;
