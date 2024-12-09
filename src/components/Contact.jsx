import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xblrboeo");
  return (
    <div className="contact-container">
      <div className="headercontact">
        <h1>CONTACT US</h1>
        <p>Reach out for a new project or just say hello</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h3>SEND US A MESSAGE</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button className="submit" type="submit" disabled={state.submitting}>
              SUBMIT
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h3>CONTACT INFO</h3>
          <h4>Call us (Manager:) at:</h4>
          <p>
            +91 90925 59610
          </p>
          <h4>Call us (Student Head:) at:</h4>
          <p>
            +91 99837 30340
            <br />
            +91 63830 19898
          </p>
          <h4>Email us at</h4>
          <p>
            scient.nitt@edu
            <br />
            teamscient.nitt@gmail.com
          </p>
          <h4>Where to find us</h4>
          <p>
            NIT Trichy
          </p>
          <div className="map">
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.701761855082!2d78.8138688748695!3d10.757452689390144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d3d71d1d26b%3A0xfb1eb8b4045b0de!2sSCIEnT%20Lab!5e0!3m2!1sen!2sin!4v1723030553957!5m2!1sen!2sin" width="250" height="180" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
