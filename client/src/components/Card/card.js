// src/components/Card.js
import React from 'react';
import './card.css';

function Card({ imageSrc, imageAlt, title, price, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div className="card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  onClick={onClick}>
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default Card;