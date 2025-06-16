import axios from 'axios';

export const fetchProducts = () => {
  return axios.get('https://fakestoreapi.com/products');
};
