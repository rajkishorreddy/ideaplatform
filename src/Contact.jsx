import React from "react";
import "./contact.scss";
import one from "./assets/one.jpg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact-heading">Contact us</div>
        <div className="contact-item">
          <img src={three} alt="one" className="contact-item-img" />
          <div className="contact-item-info">
            <div className="contact-item-info-name">Rakesh Bandi</div>
            <div className="contact-item-info-ph">ph: 84455566378 </div>
          </div>
        </div>
        <div className="contact-item">
          <img src={two} alt="one" className="contact-item-img" />
          <div className="contact-item-info">
            <div className="contact-item-info-name">Uma Venkata Mahesh</div>
            <div className="contact-item-info-ph">ph: 9381372628</div>
          </div>
        </div>
        <div className="contact-item">
          <img src={one} alt="one" className="contact-item-img" />
          <div className="contact-item-info">
            <div className="contact-item-info-name">Sri Teja Aluri</div>
            <div className="contact-item-info-ph">ph: 7901462460 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
