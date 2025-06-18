import { useNavigate } from 'react-router-dom';
import '../../css/Product-Style/product.css';

function ProductDetails({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className='container'>
      <h2>{product.title}</h2>
      <div className='flex product-box'>
        <img src={product.image} alt={product.title} className='product-image' />
        <div className='product-text'>
          <p className='product-price'>${product.price}</p>
          <p>{product.description}</p>
          <p><em>Category:</em> {product.category}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;