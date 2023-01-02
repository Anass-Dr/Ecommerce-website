import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Header from './Header';
import './Contact.css';

const Info = function () {
  return (
    <div id="contact-info">
      <h2>Get in touch</h2>
      <div className="address-wrapper">
        <i className="fa-solid fa-location-dot"></i>
        <div className="info-address">
          <h5>Address</h5>
          <p>123 Demo St, San Francisco, CA 45678, United States</p>
        </div>
      </div>
      <h5 id="contact-info__h5">Customer service</h5>
      <p id="contact-info__p">
        Diam id quis quam pulvinar sodales fermentum, elit risus tristique
        praesent sit dictumst vel amet.
      </p>
      <ul id="contact-info--details">
        <li>
          <i className="fa-solid fa-phone-flip"></i>
          <p>+1 123-456-7890</p>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <p>mail@example.com</p>
        </li>
        <li>
          <i className="fa-solid fa-clock"></i>
          <p>08.00 - 16.00 EST</p>
        </li>
      </ul>
    </div>
  );
};

const Form = function () {
  return (
    <form id="contact-form">
      <hr />
      <div className="form-control">
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          className="form-control__input"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          className="form-control__input"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="form-control">
        <label htmlFor="comment">
          Comment or Message <span>*</span>
        </label>
        <textarea
          className="form-control__input"
          name="comment"
          id="comment"
        ></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Cart = function () {
  const iframeHTML =
    '<iframe src="https://maps.google.com/maps?q=san%20francisco&t=m&z=14&output=embed&iwloc=near" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return <div>{ReactHtmlParser(iframeHTML)}</div>;
};

const ContactUs = function () {
  return (
    <section id="contact-us">
      <div className="container">
        <div className="cart">
          <Cart />
        </div>
        <div className="info-wrapper">
          <Info />
          <Form />
        </div>
      </div>
    </section>
  );
};

function Contact() {
  return (
    <div id="contact-page">
      <Header
        title="Contact Us"
        imgSrc="url('/src/assets/images/contact-main.jpeg')"
      />
      <ContactUs />
    </div>
  );
}

export default Contact;
