import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__content--header">
          <span>
            <p>Introduction</p>
            <p>OurWorld</p>
            <p>Services</p>
            <p>Contact</p>
          </span>
        </div>
        <div className="footer__content--body">
          <span>
            <BsGithub />
            <BsLinkedin />
            <BsTwitter />
            <BsInstagram />
          </span>
        </div>
        <div className="footer__content--end">&copy; Copyright 2021 - John Katua</div>
      </div>
    </div>
  );
};

export default Footer;
