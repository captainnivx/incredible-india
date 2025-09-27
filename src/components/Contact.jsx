import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Connect With Us</h2>
      <p>Have questions or need help planning your trip?</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
