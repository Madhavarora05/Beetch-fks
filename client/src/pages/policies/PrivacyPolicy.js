// src/policies/PrivacyPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './policy.css';

function PrivacyPolicy() {
  return (
    <div className='policy-page'>
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Beetch fks! We respect your privacy and are dedicated to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, make a purchase, or interact with our services.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            When you use our services, we may collect the following types of personal information:
          </p>
          <ul>
            <li>Contact Information: Name, email address, phone number, and mailing address.</li>
            <li>Payment Information: Credit card details, billing address, and other payment information.</li>
            <li>Account Information: Username, password, and other authentication information.</li>
            <li>Purchase History: Details of products purchased, date and time of purchase, and any correspondence related to the purchase.</li>
          </ul>
          <h3>Non-Personal Information</h3>
          <p>We may also collect non-personal information such as:</p>
          <ul>
            <li>Browser and Device Information: IP address, browser type, device type, operating system, and device identifiers.</li>
            <li>Usage Data: Information about how you use our website, such as pages visited, links clicked, and time spent on each page.</li>
          </ul>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>Order Processing: To manage and fulfill your orders, including sending order confirmations and shipment updates.</li>
            <li>Customer Support: To respond to your inquiries and provide support.</li>
            <li>Personalization: To customize your experience by presenting products and offers that may interest you.</li>
            <li>Improvement: To enhance our website, products, and services based on analytics and user feedback.</li>
            <li>Security: To protect our website, users, and business from fraud and other unauthorized activities.</li>
          </ul>
        </section>
        <section>
          <h2>How We Share Your Information</h2>
          <p>We may share your information with third parties under the following circumstances:</p>
          <ul>
            <li>Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and marketing.</li>
            <li>Legal Obligations: We may disclose your information if required by law or in response to legal processes.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</li>
          </ul>
        </section>
        <section>
          <h2>Your Choices</h2>
          <p>You have the following choices regarding your personal information:</p>
          <ul>
            <li>Access and Update: You can access and update your personal information by logging into your account on our website.</li>
            <li>Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions in those emails. Please note that you may still receive transactional emails related to your orders.</li>
            <li>Cookies: Most web browsers are set to accept cookies by default. You can usually modify your browser settings to decline cookies if you prefer.</li>
          </ul>
        </section>
        <section>
          <h2>Security</h2>
          <p>We employ reasonable security measures to protect your personal information against unauthorized access, use, and disclosure. However, please be aware that no internet or email transmission is entirely secure, so be cautious about the information you share with us electronically.</p>
        </section>
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may occasionally update this Privacy Policy. Any changes will take effect immediately upon posting the updated policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please <span className='links'><Link to="/contact">Contact Us</Link></span></p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
