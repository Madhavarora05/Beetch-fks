// src/policies/ShippingPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './policy.css';  // Reuse the same CSS styling

function ShippingPolicy() {
  return (
    <div className='policy-page'>
      <div className="policy-container">
        <h1>Shipping Policy</h1>
        <section>
          <h3>Beetch fks Shipping Policy</h3>
          <p>Thank you for shopping with beetch fks! We strive to ensure a smooth and satisfying shopping experience. Below is our shipping policy.</p>
        </section>
        <section>
          <h3>Shipping Destinations</h3>
          <p>We currently ship only within India.</p>
        </section>
        <section>
          <h3>Shipping Rates</h3>
          <p>We are pleased to offer free shipping on all orders within India.</p>
        </section>
        <section>
          <h3>Processing Time</h3>
          <p>All orders are processed within 1-5 business days. Orders are not processed or shipped on weekends or public holidays.</p>
        </section>
        <section>
          <h3>Shipping Time</h3>
          <p>Estimated delivery times within India are 2-5 business days. Please note that these are estimated delivery times and may vary due to circumstances beyond our control, such as carrier delays, regional restrictions, or natural events.</p>
        </section>
        <section>
          <h3>Order Tracking</h3>
          <p>Once your order is shipped, you will receive a shipping confirmation email with a tracking number. Use this tracking number to check the status of your shipment on the carrier's website.</p>
        </section>
        <section>
          <h3>Shipping Restrictions</h3>
          <p>We do not ship to P.O. Boxes or APO/FPO addresses.</p>
        </section>
        <section>
          <h3>Lost or Stolen Packages</h3>
          <p>beetch fks is not responsible for lost or stolen packages. If your package is lost or stolen, please contact the carrier directly to file a claim. We will assist you as much as possible in this process.</p>
        </section>
        <section>
          <h3>Returns and Exchanges</h3>
          <p>Please refer to our Return Policy for details on returns and exchanges.</p>
        </section>
        <section>
          <h3>Contact Us</h3>
          <p>If you have any questions about our shipping policy, please <span className='links'><Link to="/contact">Contact Us</Link></span></p>
        </section>
        <p>Thank you for choosing beetch fks! We appreciate your support and trust in our brand.</p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
