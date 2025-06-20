import React from 'react';
import ProductCard from './ProductCard';
import '../../css/Home-Style/Home.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;