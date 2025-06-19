import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/suggesteditems.css';

function SuggestedItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=4');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="suggested-items">
      <h2>Top Sellers</h2>
      <div className="suggested-product-list">
        {products.map(product => (
          <div key={product.id} className="suggested-product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h3>${product.price.toFixed(2)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedItems;
