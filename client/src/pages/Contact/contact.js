import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>For queries & assistance, feel free to reach out at:</p>
        <ul>
          <li><strong>Mail:</strong> support@beetchfks.in</li>
          <li><strong>Phone:</strong> +91 0000000000 (12:00pm to 8:00pm)</li>
          <li><strong>Instagram:</strong> @beetch.fks</li>
          <li><strong>Address:</strong> </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below with any questions or feedback.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
