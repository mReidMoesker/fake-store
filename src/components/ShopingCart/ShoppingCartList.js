import { useState, useEffect } from 'react';
import CartButtonWrapper from './CartButtonWrapper';

function ShoppingCartList() {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      try {
        setItemsInCart(JSON.parse(storedItems));
      } catch (error) {
        console.error('Error parsing cart items from localStorage', error);
        setItemsInCart([]);
      }
    }
  }, []);

  const updateCart = (newCart) => {
    setItemsInCart(newCart);
    localStorage.setItem('cart',  JSON.stringify(newCart));
  };
  const handIncrease = (id) => {
    const updated = itemsInCart.map(item => 
      item.id === id ? {...item, quantity: (item.quantity || 1) + 1} : item
    );
    updateCart(updated);
  };
  const handleDecrease = (id) => {
    const updated = itemsInCart
      .map(item => 
        item.id === id ? {...item, quantity: Math.max((item.quantity || 1) -1, 1)} : item
    );
    updateCart(updated);
  }
  const handleRemove = (id) => {
    const updated = itemsInCart.filter(item => item.id !== id);
    updateCart(updated);
  }
  const handleView = (id) => {
    window.location.href = `/product/${id}`;
  };
  return (
    <ul className="shopping-cart-list">
      <p>{itemsInCart.length === 0 && <li>Your cart is empty.</li>}</p>
      {itemsInCart.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p className='quantity'>{item.quantity}</p>
          <CartButtonWrapper
          onView={() => handleView(item.id)}
            onIncrease={()=> handIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCartList;
