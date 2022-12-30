import React from 'react';
import Header from './Header';
import './Contact.css';

function Contact() {
  return (
    <div id="contact-page">
      <Header
        title="Contact Us"
        imgSrc="url('/src/assets/images/contact-main.jpeg')"
      />
    </div>
  );
}

export default Contact;
