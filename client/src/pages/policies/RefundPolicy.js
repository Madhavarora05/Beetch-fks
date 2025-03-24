// src/policies/RefundPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './policy.css';  // Reuse the same CSS styling

function RefundPolicy() {
  return (
    <div className='policy-page'>
      <div className="policy-container">
        <h1>Refund Policy</h1>
        <section>
          <p>We do not offer refunds, except in cases where the product is damaged. However, we do offer exchanges. We have a 2-day exchange policy, which means you have 2 days (48 hours) after receiving your item to request an exchange. Note that exchanges are not applicable on purchases made during sale items.</p>
          <p>Exception: If someone wishes to return the product when it is not damaged or defective, a fee of ₹100 will be deducted from the refund amount, provided the request is made within 2 days of receiving the product.</p>
        </section>

        <section>
          <h2>Return Eligibility</h2>
          <p>To be eligible for a return, your item must be in the same condition that you received it: unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
          <p>To start a return, you can <span className='links'><Link to="/contact">Contact Us</Link></span>.</p>
          <p>If your return is accepted, we’ll send you a return shipping label, along with instructions on how and where to send your package. Items sent back without first requesting a return will not be accepted.</p>
        </section>

        <section>
          <h2>Contact Us for Any Return Questions</h2>
        </section>

        <section>
          <h2>Damages and Issues</h2>
          <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so we can evaluate the issue and make it right.</p>
        </section>

        <section>
          <h2>Exceptions / Non-returnable Items</h2>
          <p>Certain types of items cannot be returned, such as perishable goods (food, flowers, or plants), custom products (special orders or personalized items), and personal care goods (beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
          <p>Unfortunately, we cannot accept returns on sale items or gift cards.</p>
        </section>

        <section>
          <h2>Exchanges</h2>
          <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
        </section>

        <section>
          <h2>Refunds</h2>
          <p>We will only provide refunds in rare cases if the product cannot be replaced or in other exceptional situations.</p>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicy;
