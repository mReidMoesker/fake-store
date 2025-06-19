import { useNavigate } from 'react-router-dom';
import '../../css/Product-Style/product.css';

function ProductDetails({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <>
      <div className='container'>
        <div className='flex product-box'>
          <img src={product.image} alt={product.title} className='product-image' />
          <div className='product-text'>
            <h2>{product.title}</h2>
            <p className='product-price'>${product.price}</p>
            <p className='product-description'>{product.description}</p>
            <p className='category'>Category: {product.category}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;