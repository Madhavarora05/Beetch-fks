import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/card';
import ProductPage from '../../components/ProductPage/ProductPage';
import Modal from 'react-modal';
import './home.css';
import home2 from '../../assets/images/home2.png';
import frontImage from '../../assets/images/front.jpeg';
import backImage from '../../assets/images/back.jpeg';
import image1 from '../../assets/images/standout1.jpg'; // Replace with your image paths
import image2 from '../../assets/images/standout2.jpg';

Modal.setAppElement('#root'); // Set this to your app root

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImage, setCurrentImage] = useState(image1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const product = {
    id: 1,
    imageSrc: frontImage,
    title: 'SINNISTER T-SHIRT',
    price: 2169,
    description: 'Vintage washed tee with devil print.',
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  // Image swapping logic
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to beetch.fks</h1>
          <p>Your one-stop shop for trendy fashion</p>
        </div>
      </div>

      {/* New Drop Section */}
      <div className="shared-section">
        <h2>New Drop</h2>
        <div className="shared-cards">
          {[1, 2, 3, 4].map((cardIndex) => (
            <Card
              key={cardIndex}
              imageSrc={hoveredCard === cardIndex ? frontImage : backImage}
              imageAlt={product.title}
              title={product.title}
              price={`Rs. ${product.price}`}
              onMouseEnter={() => handleMouseEnter(cardIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      {/* New Section */}
      <div className="new-section">
        <div className="new-section-content">
          <div className="new-section-text">
            <h3>"Express Yourself in Style"</h3>
            <p>
              Welcome to Beetch Fks - where style meets expression. Explore our
              curated collection of tees designed to make a statement and reflect your
              unique personality.
            </p>
            <button className="explore-now-btn">Shop Now</button>
          </div>
          <div className="new-section-image-container">
            <img src={home2} alt="Fashion" className="new-section-image" />
          </div>
        </div>
      </div>

      {/* Bestseller Section */}
      <div className="shared-section">
        <h2>Bestsellers</h2>
        <div className="shared-cards">
          {[1, 2, 3, 4].map((cardIndex) => (
            <Card
              key={cardIndex}
              imageSrc={hoveredCard === cardIndex ? frontImage : backImage}
              imageAlt={product.title}
              title={product.title}
              price={`Rs. ${product.price}`}
              onMouseEnter={() => handleMouseEnter(cardIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      {/* Stand Out Section */}
      <div className="stand-out-section">
        <div
          className="stand-out-image"
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
        >
          <div className="stand-out-overlay">
            <h2>Dare to Be Different!</h2>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="product-modal">
        {selectedProduct && <ProductPage product={selectedProduct} />}
        <button onClick={closeModal} className="close-modal-btn">Close</button>
      </Modal>
    </>
  );
}

export default Home;
