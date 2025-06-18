import { useState, useEffect } from 'react';
import CartButtonWrapper from './CartButtonWrapper';

localStorage.setItem('cartItems', JSON.stringify([
  { id: 1, name: 'product one' },
  { id: 2, name: 'product two' }
]));


function ShoppingCartList() {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      try {
        setItemsInCart(JSON.parse(storedItems));
      } catch (error) {
        console.error('Error parsing cart items from localStorage', error);
        setItemsInCart([]);
      }
    }
  }, []);

  return (
    <ul>
      {itemsInCart.length === 0 && <li>Your cart is empty.</li>}
      {itemsInCart.map(item => (
        <li key={item.id}>
          {item.name}
          <CartButtonWrapper />
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCartList;
