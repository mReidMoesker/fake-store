import React from 'react';
import '../../css/Home-Style/ProductCard.css'; 
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
     <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
     </div>
    </Link>
  );
}

export default ProductCard;

