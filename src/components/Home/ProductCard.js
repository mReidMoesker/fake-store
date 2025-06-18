import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '100%', height: '150px', objectFit: 'contain' }}
      />
      <h3 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{product.title}</h3>
      <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
