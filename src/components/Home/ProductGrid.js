import React from 'react';
import ProductCard from './ProductCard';
import '../../css/Home-Style/ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;