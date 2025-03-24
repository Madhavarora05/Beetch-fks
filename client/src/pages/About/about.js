import React from 'react';
import about2 from '../../assets/images/about2.jpeg';
import about3 from '../../assets/images/about3.jpeg';
import image1 from '../../assets/images/home2.png'; // Add image for "For You" collection
import image2 from '../../assets/images/home2.png'; // Add image for "For You" collection
import Card from '../../components/Card/card'; // Import the Card component
import './about.css';

const About = () => {
  return (
    <>
      {/* Parallax Section */}
      <div className="parallax-section">
        <div className="parallax-overlay">
          <h1>Why Beetch Fks?</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h2>Welcome to Beetch Fks!</h2>
        <p>
          We’re an Indian brand that fuses edgy creativity with unapologetic style. 
          At Beetch Fks, we design bold, statement-making T-shirts that embrace individuality 
          and celebrate being unapologetically you.
        </p>
        <p>
          Our designs channel the playful yet daring energy of those who aren’t afraid to stand out. 
          Beetch Fks is all about embracing the quirks, imperfections, and strength that make you unique. 
          We believe that being bold isn’t about seeking attention—it’s about owning your story with confidence.
        </p>
        <p>
          In a world where conformity rules, we celebrate those who thrive on authenticity. Wear Beetch Fks 
          to express your true self with flair, turning heads for all the right reasons.
        </p>
        <p><strong>Be bold. Be fearless. Be Beetch Fks.</strong></p>
      </div>

      {/* Custom Packaging & Thank You Card Section */}
      <div className="features-section">
        <div className="feature">
          <img src={about2} alt="Custom Packaging" className="feature-image" />
          <h3>Custom Packaging</h3>
          <p>
            "We ship our products in boxes that are as fierce as our designs, delivering 
            both style and impact straight to your doorstep."
          </p>
          {/* Instagram Button */}
          <a href="https://www.instagram.com" className="social-btn instagram-btn" target="_blank" rel="noopener noreferrer">
            Instagram→
          </a>
        </div>
        <div className="feature">
          <img src={about3} alt="Thank You Card" className="feature-image" />
          <h3>Thank You Card?</h3>
          <p>
            "It’s not just a thank-you card; it’s a fierce declaration!"
          </p>
          {/* Pinterest Button */}
          <a href="https://www.pinterest.com" className="social-btn pinterest-btn" target="_blank" rel="noopener noreferrer">
            Pinterest→
          </a>
        </div>
      </div>

      {/* "For You" Collection Section */}
      <div className="for-you-section">
        <h2>For You</h2>
        <div className="for-you-cards">
          <Card imageSrc={image1} imageAlt="Image 1" title="Bold Design 1" price="₹999" />
          <Card imageSrc={image2} imageAlt="Image 2" title="Bold Design 2" price="₹1099" />
          <Card imageSrc={image1} imageAlt="Image 3" title="Bold Design 3" price="₹1199" />
          <Card imageSrc={image2} imageAlt="Image 4" title="Bold Design 4" price="₹1299" />
        </div>
      </div>
      {/* Contact Information Section */}
      <div className="contact-section">
        <h2>Contact Information</h2>
        <p>For queries & assistance, feel free to reach out at our:</p>
        <ul>
          <li><strong>Mail:</strong> support@wtflex.in</li>
          <li><strong>Phone:</strong> +91 9111553117 (12:00pm to 8:00pm)</li>
          <li><strong>Instagram:</strong> @wtflex.in</li>
          <li><strong>Address:</strong> 5th Floor, Srajan College of Design, Bhugaon Road, Bavdhan, Pune 411021</li>
        </ul>
      </div>
    </>
  );
};

export default About;
