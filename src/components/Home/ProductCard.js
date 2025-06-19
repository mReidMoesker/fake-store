import React from 'react';
import '../../css/Home-Style/ProductCard.css'; 
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

