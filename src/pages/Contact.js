import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="saas">
      <section className="sec">
        <h2>Contact Us</h2>
        <p className="cool">
          We’re here to help! from product support to media enquires, feel free
          to mail us at <span>fulsome_inker_12@gmail.com</span>
        </p>
      </section>

      <section className="sec">
        <div className="contacts">
          <div className="contact-cards">
            <div className="card-container">
              <div className="card">
                <h3>Nigeria</h3>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>2286 Royal Lt. Abdul Musa, Abuja, Nigeria</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+234 (903) 555-345</p>
                </span>
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <h3>USA</h3>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+1 (205) 555-0100</p>
                </span>
              </div>
            </div>
          </div>

          <form action="#">
            <h2>Send us a message</h2>
            <span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
            </span>
            <button>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
