import ShoppingCartList from '../components/ShoppingCartList';
import CreditCardForm from '../components/CreditCardForm';
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
