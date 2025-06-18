import ShoppingCartList from '../components/ShopingCart/ShoppingCartList';
import CreditCardForm from '../components/ShopingCart/CreditCardForm';
import '../css/shopping-cart/index.css';

function ShoppingCart() {
  return (
    <main>
      <h2>Shopping Cart</h2>
      <section className="flex">
        <ShoppingCartList />
        <CreditCardForm />
      </section>
    </main>
  );
}

export default ShoppingCart;
