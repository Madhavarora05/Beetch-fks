import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const product = state?.product || {
    // Fallback product details in case state is not passed
    id,
    imageSrc: '',
    title: 'Unknown Product',
    price: 'N/A',
    description: 'Product details not available.',
  };

  return (
    <div className="product-page-container">
      <div className="product-image-section">
        <img src={product.imageSrc} alt={product.title} className="product-image" />
      </div>
      <div className="product-details-section">
        <h1>{product.title}</h1>
        <div className="size-options">
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <button key={size} className="size-button">
              {size}
            </button>
          ))}
        </div>
        <p className="product-price">Rs. {product.price}</p>
        <button className="add-to-cart-btn">Add to cart</button>
        <button className="buy-now-btn">Buy it now</button>
        <p className="product-description">
          {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
