import { useEffect } from 'react';
import axios from 'axios';

function ProductFetcher({ onProductsLoaded }) {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log('Fetched products:', res.data);
        onProductsLoaded(res.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        onProductsLoaded([]);
      }
    };

    fetchProducts();
  }, [onProductsLoaded]);

  return null;
}

export default ProductFetcher;