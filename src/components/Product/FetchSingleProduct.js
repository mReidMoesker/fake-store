import { useEffect } from 'react';
import axios from 'axios';

function FetchSingleProduct({ productId, onProductLoaded }) {
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        console.log('Fetched product:', res.data);
        onProductLoaded(res.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        onProductLoaded(null);
      }
    };

    fetchProduct();
  }, [productId, onProductLoaded]);

  return null;
}

export default FetchSingleProduct;