// src/policies/CancellationPolicy.js
import React from 'react';
import './policy.css';  // Reuse the same CSS styling

function CancellationPolicy() {
  return (
    <div className='policy-page'>
      <div className="policy-container">
        <h1>Cancellation Policy</h1>
        <section>
          <h2>Cancellation Policy</h2>
          <p>Some items in our store may be offered to you as a subscription, a pre-order, or try before you buy. This cancellation policy lays out how you can change or cancel these kinds of purchases.</p>
        </section>
        <section>
          <h2>Pre-orders</h2>
          <p>When you purchase a pre-order, you are buying an out-of-stock or soon-to-be-available product not yet in inventory. We may collect no payment or a partial deposit at checkout, store your payment method, then fulfill and charge the full or remaining payment at a future date.</p>
        </section>
      </div>
    </div>
  );
}

export default CancellationPolicy;
