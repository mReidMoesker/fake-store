import { useEffect, useState } from 'react';
import HeroBanner from '../components/Home/HeroBanner.js';
import SortFilter from '../components/Home/SortFilter.js';
import ProductGrid from '../components/Home/ProductGrid.js';
import Loader from '../components/Home/Loader.js';
import { fetchProducts } from '../Services/ProductService.js';
function Home() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('name-asc');
  const [loading, setLoading] = useState(true);


  // Error Handling

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Sorting function
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="home-container">
      <HeroBanner />
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      {loading ? <Loader /> : <ProductGrid className='product' products={sortedProducts} />}
    </div>
  );
};

export default Home;