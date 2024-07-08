import React from "react";
import { Form } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <span className="all">
      <span>
        <p className="three">Glorytaste</p>
      </span>
      <span>
        <FaInstagram className="socials mx-4" />
        <FaFacebook className="socials mx-4" />
        <FaTwitter className="socials mx-4" />
      </span>
      <span>
        <p className="four">Join our mail list</p>
      </span>
      <span className="nun">
        <Form>
          <input
            type="email"
            placeholder="Your email address"
            className="add"
          />
          <button type="submit" className="footerB">
            Send
          </button>
        </Form>
      </span>
    </span>
  );
};

export default Footer;
