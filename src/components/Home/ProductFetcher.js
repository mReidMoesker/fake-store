import { useEffect } from 'react';
import axios from 'axios';

function ProductFetcher({ onProductsLoaded }) {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        onProductsLoaded(res.data);
      } catch (error) {
        console.error('Failed To Fetch Products:', error);
        onProductsLoaded([]);
      }
    };

    fetchProducts();
  }, [onProductsLoaded]);

  return null; 
}

export default ProductFetcher;

