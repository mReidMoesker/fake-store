import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <p><em>Category:</em> {product.category}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;