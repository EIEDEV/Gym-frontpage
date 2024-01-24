import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__left">
          <h5>READY FOR THE</h5>
          <h5>
            <span> NEXT </span> LESSON?
          </h5>
          <small>ezeaguemmanuel65@gmail.com</small>
        </div>
        <div className="footer__right">
          <div className="footer__socials">
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <AiOutlineWhatsApp />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </div>
          <div className="footer__term">
            <small>PRIVACY POLICY</small>
            <small>TERMS & CONDITIONS</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
